$location = (Get-Location).tostring();

rm -r .\coverage -ErrorAction SilentlyContinue

.\tools\jscoverage.exe .\ .\coverage -v --no-instrument=.\js\tests --no-instrument=.\js\lib --exclude=.\coverage

$jscoverage = 'file:///' + $location + '\coverage\jscoverage.html?myPage.tests.html';

$ie = New-Object -comObject InternetExplorer.Application
$ie.visible = $true
$ie.navigate($jscoverage)
$ie
$ie.Document
