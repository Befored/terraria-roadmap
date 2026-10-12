$ErrorActionPreference = 'Continue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$dataFile = "data.js"
if (-Not (Test-Path $dataFile)) { Write-Host "data.js not found!"; exit }
$content = Get-Content -Path $dataFile -Raw

# Match names and mods from data.js. We match everything with mod C, F or V.
$regex = [regex]"name:\s*['""]([^'""]+)['""],\s*mod:\s*['""]([CFV])['""]"
$matches = $regex.Matches($content)

$itemsToDownload = @{}
foreach ($match in $matches) {
    $itemsToDownload[$match.Groups[1].Value] = $match.Groups[2].Value
}

# Exclude bosses or groups we know don't have direct icons
$excludeList = @("Champions", "Mutant", "Abominationn", "Eridanus, Champion of Cosmos", "Exo Mechs", "Supreme Calamitas", "Yharon, Dragon of Rebirth", "The Devourer of Gods", "The Old Duke", "Polterghast", "Signus, Envoy of the Devourer", "Ceaseless Void", "Storm Weaver", "Providence, the Profaned Goddess", "Dragonfolly", "Profaned Guardians", "Lifelight", "Banished Baron", "Astrum Deus", "Lunatic Cultist", "Ravager", "Duke Fishron", "Plaguebringer Goliath", "Golem", "Astrum Aureus", "Leviathan and Anahita", "Plantera", "Calamitas Clone", "Brimstone Elemental", "Skeletron Prime", "The Destroyer", "The Twins", "Cryogen", "Cursed Coffin", "Deviantt", "Trojan Squirrel", "Wall of Flesh", "Slime God", "Skeletron", "Queen Bee", "Hive Mind", "Eater of Worlds", "Crabulon", "Eye of Cthulhu", "Desert Scourge", "King Slime")

foreach ($ex in $excludeList) {
    if ($itemsToDownload.ContainsKey($ex)) {
        $itemsToDownload.Remove($ex)
    }
}

if (-Not (Test-Path "icons")) { New-Item -ItemType Directory -Path "icons" | Out-Null }

$userAgent = "TerrariaRoadmap/1.0 (personal fan project; contact: ant-ai@example.com)"

$successCount = 0
$error404Count = 0
$error429Count = 0
$otherErrorCount = 0
$failedItems = @()

function Invoke-WikiApi {
    param($url)
    $attempts = 0
    while ($attempts -lt 3) {
        try {
            $response = Invoke-WebRequest -Uri $url -UserAgent $userAgent -UseBasicParsing
            return $response.Content
        } catch {
            if ($_.Exception.Response.StatusCode -eq 429) {
                $attempts++
                if ($attempts -le 3) { 
                    Write-Host " [429] Rate limited. Waiting 10s..." -NoNewline
                    Start-Sleep -Seconds 10 
                } else { 
                    throw $_ 
                }
            } else {
                throw $_
            }
        }
    }
}

foreach ($itemName in $itemsToDownload.Keys) {
    $mod = $itemsToDownload[$itemName]
    $safeName = $itemName -replace ' ', '_'
    $safeUrlName = [Uri]::EscapeDataString($safeName)
    $filePath = "icons\$safeName.png"

    if (Test-Path $filePath) {
        Write-Host "[skip] $itemName already exists."
        $successCount++
        continue
    }

    $wikiDomain = if ($mod -eq 'C') { "calamitymod.wiki.gg" } elseif ($mod -eq 'F') { "fargosmods.wiki.gg" } else { "terraria.wiki.gg" }
    
    $urlFound = $false
    $imageUrl = ""

    Write-Host "Fetching $itemName... " -NoNewline

    try {
        # Try 1: Exact File Match
        $api1 = "https://$wikiDomain/api.php?action=query&titles=File:$safeUrlName.png&prop=imageinfo&iiprop=url&format=json"
        $json1 = Invoke-WikiApi -url $api1 | ConvertFrom-Json
        
        $pages = $json1.query.pages
        $pageProps = $pages.psobject.properties
        $firstPage = $pageProps | Select-Object -First 1

        if ($null -ne $firstPage.Value.imageinfo -and $firstPage.Value.imageinfo.Count -gt 0) {
            $imageUrl = $firstPage.Value.imageinfo[0].url
            $urlFound = $true
        } else {
            # Try 2: Prefix Match
            $api2 = "https://$wikiDomain/api.php?action=query&list=allimages&aiprefix=$safeUrlName&format=json"
            $json2 = Invoke-WikiApi -url $api2 | ConvertFrom-Json
            
            if ($null -ne $json2.query.allimages -and $json2.query.allimages.Count -gt 0) {
                $imageUrl = $json2.query.allimages[0].url
                $urlFound = $true
            }
        }

        if ($urlFound) {
            Invoke-WebRequest -Uri $imageUrl -OutFile $filePath -UserAgent $userAgent -UseBasicParsing
            Write-Host "[ ok ] downloaded."
            $successCount++
        } else {
            Write-Host "[404 ] not found via API."
            $error404Count++
            $failedItems += $itemName
        }
    } catch {
        $msg = $_.Exception.Message
        if ($msg -match "429") {
            Write-Host "[429 ] failed after retries."
            $error429Count++
        } else {
            Write-Host "[ERR ] $msg"
            $otherErrorCount++
        }
        $failedItems += $itemName
    }

    Start-Sleep -Milliseconds 500
}

Write-Host "`n--- Summary ---"
Write-Host "Downloaded/Exists: $successCount"
Write-Host "Errors 404: $error404Count"
Write-Host "Errors 429: $error429Count"
Write-Host "Other Errors: $otherErrorCount"
if ($failedItems.Count -gt 0) {
    Write-Host "Failed items:"
    foreach ($err in $failedItems) {
        Write-Host " - $err"
    }
}
