@echo off
setlocal
set "ROOT=%~dp0"
for %%F in (index.html styles.css gallery.js inventory.json) do (
  if not exist "%ROOT%%%F" (
    echo Missing required gallery source: %%F 1>&2
    exit /b 1
  )
)
if not exist "%ROOT%images" (
  echo Missing gallery image directory. 1>&2
  exit /b 1
)
for %%F in (setup-language.png setup-startup.png settings-interface.png settings-notifications.png regex-test-valid.png regex-replace-valid.png) do (
  if not exist "%ROOT%images\%%F" (
    echo Missing reviewed gallery image: %%F 1>&2
    exit /b 1
  )
)
if not exist "%ROOT%dist" mkdir "%ROOT%dist" || exit /b 1
robocopy "%ROOT%." "%ROOT%dist" index.html styles.css gallery.js inventory.json /NFL /NDL /NJH /NJS /NC /NS
if errorlevel 8 exit /b %ERRORLEVEL%
robocopy "%ROOT%images" "%ROOT%dist\images" *.png /NFL /NDL /NJH /NJS /NC /NS
if errorlevel 8 exit /b %ERRORLEVEL%
robocopy "%ROOT%docs" "%ROOT%dist\docs" /E /NFL /NDL /NJH /NJS /NC /NS
if errorlevel 8 exit /b %ERRORLEVEL%
echo Static gallery assembled at dist.
exit /b 0
