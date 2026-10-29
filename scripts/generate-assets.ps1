Add-Type -AssemblyName System.Drawing

function Create-OgImage {
    param([string]$outPath)
    $width = 1200
    $height = 630
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

    # Background
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 11, 12))
    $g.FillRectangle($bgBrush, 0, 0, $width, $height)

    # Subtle grid lines
    $gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(20, 255, 255, 255), 1)
    for ($x = 40; $x -lt $width; $x += 60) {
        $g.DrawLine($gridPen, $x, 0, $x, $height)
    }
    for ($y = 40; $y -lt $height; $y += 60) {
        $g.DrawLine($gridPen, 0, $y, $width, $y)
    }

    # Inner Card
    $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(18, 18, 20))
    $cardPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, 232, 180, 88), 2)
    $g.FillRectangle($cardBrush, 60, 60, 1080, 510)
    $g.DrawRectangle($cardPen, 60, 60, 1080, 510)

    # Accent Dot & Brand Wordmark
    $amberBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 180, 88))
    $g.FillEllipse($amberBrush, 110, 115, 18, 18)

    $brandFont = New-Object System.Drawing.Font("Segoe UI", 26, [System.Drawing.FontStyle]::Bold)
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244, 243, 239))
    $g.DrawString("TiziClash", $brandFont, $whiteBrush, 140, 105)

    $domainFont = New-Object System.Drawing.Font("Consolas", 18, [System.Drawing.FontStyle]::Regular)
    $dimBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(160, 244, 243, 239))
    $g.DrawString("tiziclash.cc", $domainFont, $dimBrush, 920, 112)

    # Main Heading
    $titleFont = New-Object System.Drawing.Font("Segoe UI", 36, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("Modern Network Core & Independent Tech Lab", $titleFont, $whiteBrush, 110, 210)

    # Description
    $descFont = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)
    $descBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 244, 243, 239))
    $descText = "High-Performance Tooling, Mihomo Ecosystem & 100% Zero-Telemetry Architecture"
    $g.DrawString($descText, $descFont, $descBrush, 110, 300)

    # Pill tags
    $pills = @("Rust Wasm Engine", "Smart Routing Hub", "Edge Relay Probe", "Zero Telemetry")
    $pillFont = New-Object System.Drawing.Font("Segoe UI", 15, [System.Drawing.FontStyle]::Regular)
    $pillBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 232, 180, 88))
    $pillBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 232, 180, 88), 1)

    $startX = 110
    foreach ($pill in $pills) {
        $size = $g.MeasureString($pill, $pillFont)
        $w = [int]$size.Width + 24
        $h = 40
        $g.FillRectangle($pillBg, $startX, 390, $w, $h)
        $g.DrawRectangle($pillBorder, $startX, 390, $w, $h)
        $g.DrawString($pill, $pillFont, $amberBrush, ($startX + 12), 398)
        $startX += ($w + 18)
    }

    # Bottom watermark
    $footerFont = New-Object System.Drawing.Font("Consolas", 14, [System.Drawing.FontStyle]::Regular)
    $footerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 244, 243, 239))
    $g.DrawString("100% INDEPENDENT ARCHITECTURE · ZERO TELEMETRY · PRIVACY FIRST", $footerFont, $footerBrush, 110, 500)

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

function Create-TouchIcon {
    param([string]$outPath)
    $size = 180
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 11, 12))
    $g.FillRectangle($bgBrush, 0, 0, $size, $size)

    # Outer amber glow
    $glowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 232, 180, 88))
    $g.FillEllipse($glowBrush, 25, 25, 130, 130)

    # Middle circle
    $midBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(80, 232, 180, 88))
    $g.FillEllipse($midBrush, 45, 45, 90, 90)

    # Core
    $amberBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 180, 88))
    $g.FillEllipse($amberBrush, 65, 65, 50, 50)

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

function Create-ProjectScreen {
    param([string]$outPath, [string]$tag, [string]$title, [string]$subtitle, [string[]]$logs)
    $width = 1600
    $height = 900
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

    # Background
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(18, 18, 20))
    $g.FillRectangle($bgBrush, 0, 0, $width, $height)

    # Window header bar
    $barBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(25, 25, 28))
    $g.FillRectangle($barBrush, 0, 0, $width, 70)

    # Traffic light dots
    $redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(239, 68, 68))
    $yellowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 158, 11))
    $greenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(16, 185, 129))
    $g.FillEllipse($redBrush, 30, 26, 18, 18)
    $g.FillEllipse($yellowBrush, 60, 26, 18, 18)
    $g.FillEllipse($greenBrush, 90, 26, 18, 18)

    # Window title
    $winFont = New-Object System.Drawing.Font("Consolas", 18, [System.Drawing.FontStyle]::Regular)
    $dimBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(140, 244, 243, 239))
    $g.DrawString("tiziclash :: $title", $winFont, $dimBrush, 140, 23)

    # Project Tag & Title
    $amberBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 180, 88))
    $tagFont = New-Object System.Drawing.Font("Consolas", 24, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("[$tag]", $tagFont, $amberBrush, 80, 120)

    $titleFont = New-Object System.Drawing.Font("Segoe UI", 44, [System.Drawing.FontStyle]::Bold)
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244, 243, 239))
    $g.DrawString($title, $titleFont, $whiteBrush, 80, 170)

    $subFont = New-Object System.Drawing.Font("Segoe UI", 22, [System.Drawing.FontStyle]::Regular)
    $g.DrawString($subtitle, $subFont, $dimBrush, 80, 250)

    # Terminal card
    $termBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 11, 12))
    $termPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(35, 255, 255, 255), 1)
    $g.FillRectangle($termBrush, 80, 330, 1440, 500)
    $g.DrawRectangle($termPen, 80, 330, 1440, 500)

    # Log text
    $logFont = New-Object System.Drawing.Font("Consolas", 20, [System.Drawing.FontStyle]::Regular)
    $greenText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(52, 211, 153))
    $cyanText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(56, 189, 248))
    $grayText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(160, 160, 165))

    $y = 360
    foreach ($line in $logs) {
        $brush = $grayText
        if ($line.StartsWith(">") -or $line.StartsWith("$")) { $brush = $cyanText }
        elseif ($line.Contains("[SUCCESS]") -or $line.Contains("READY") -or $line.Contains("OK")) { $brush = $greenText }
        elseif ($line.Contains("[BENCHMARK]") -or $line.Contains("[WARN]")) { $brush = $amberBrush }

        $g.DrawString($line, $logFont, $brush, 110, $y)
        $y += 45
    }

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Create-OgImage "public/og-image.png"
Create-TouchIcon "public/apple-touch-icon.png"

Create-ProjectScreen "public/screenshots/subconverter-core.png" "WASM_CORE" `
    "Clash SubConverter Core" `
    "Zero-dependency AST rule converter running entirely in client memory" `
    @("$ cargo build --target wasm32-unknown-unknown --release",
      "[SUCCESS] SubConverter core AST engine compiled in 1.42s (size: 184 KiB)",
      "> Loading upstream payload rulesets: 25,400 rules",
      "> Parsing YAML AST -> Generating Mihomo unified config mapping...",
      "[BENCHMARK] AST parse and compile completed in 14.8ms | Memory footprint: 4.2 MB",
      "[SUCCESS] Verification passed: 0 telemetry endpoints, 100% offline isolated execution",
      "> Output target: client://localhost/sandbox/clash-meta.yaml ready")

Create-ProjectScreen "public/screenshots/mihomo-rule-hub.png" "RULE_HUB" `
    "Mihomo Rule Hub" `
    "Modular routing rulesets and global edge latency observability matrix" `
    @("$ mihomo-hub sync --provider=tiziclash --mode=modular",
      "[SUCCESS] Fetching rule slices: [direct, ai-services, streaming-media, bypass-cn]",
      "> Compiling binary MRS rulesets for high-throughput rule matching...",
      "[BENCHMARK] Memory reduction achieved: 64.8% lighter than monolithic lists",
      "> Edge latency probe results: HK: 18ms | JP: 42ms | SG: 54ms | US: 128ms",
      "[SUCCESS] Topology graph updated with live RTT jitter calculations")

Create-ProjectScreen "public/screenshots/edge-probe.png" "CLI_PROBE" `
    "Edge Relay Probe" `
    "Cross-border network jitter and TCP/TLS handshake performance diagnostic" `
    @("$ edge-probe test --targets=global-tier1 --samples=1000 --tls-handshake",
      "> Initiating true TCP SYN + TLS 1.3 Client Hello roundtrip analysis...",
      "[BENCHMARK] Peak evening rush-hour packet loss: 0.00% (Lossless IEPL tunnel)",
      "> TLS Handshake Latency: 22.4ms (0-RTT Session Resumption active)",
      "> BGP Path verification: Clean AS-Hop path, no middlebox route hijacking",
      "[SUCCESS] Diagnostic report generated locally: ./report-2026.json (0 bytes leaked)")
