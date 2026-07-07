param(
	[string]$HostName = $env:KB_FTP_HOST,
	[string]$UserName = $env:KB_FTP_USER,
	[string]$Password = $env:KB_FTP_PASS,
	[string]$RemoteRoot = $env:KB_FTP_REMOTE_ROOT
)

$ErrorActionPreference = 'Stop'

if (-not $HostName) { throw 'Missing KB_FTP_HOST.' }
if (-not $UserName) { throw 'Missing KB_FTP_USER.' }
if (-not $Password) { throw 'Missing KB_FTP_PASS.' }
if (-not $RemoteRoot) { $RemoteRoot = 'httpdocs' }

npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw 'Build failed.' }

$distRoot = (Resolve-Path 'dist').Path
$files = Get-ChildItem -Path $distRoot -Recurse -File -Force
$uploaded = 0

foreach ($file in $files) {
	$relativePath = $file.FullName.Substring($distRoot.Length).TrimStart('\') -replace '\\', '/'
	$url = "ftp://$HostName/$RemoteRoot/$relativePath"

	& curl.exe --silent --show-error --fail --ftp-create-dirs --user "$UserName`:$Password" -T $file.FullName $url
	if ($LASTEXITCODE -ne 0) {
		throw "FTP upload failed: $relativePath"
	}

	$uploaded++
}

Write-Host "Uploaded $uploaded files to ftp://$HostName/$RemoteRoot/"
