# TrafficMonitor released-interface evidence

This public gallery presents six reviewed, unchanged images from the TrafficMonitor 1.0.48
release. They document a before-state baseline for setup, settings, and regular-expression
workflows. They do not represent a completed visual redesign or full acceptance.

Browse the [live evidence gallery](https://ding-ding-projects.github.io/TrafficMonitor-gallery/)
for image viewing and filtering. The [public inventory](inventory.json) records capture dates,
dimensions, SHA-256 digests, source revision, release, and scope. The
[evidence guide](docs/features/release-evidence/README.md) explains the review and limits.

## Source and release

- Source revision: [`ddcf441f4c3cab2a5e3b62e9ff6aff1babf3bdfa`](https://github.com/Ding-Ding-Projects/TrafficMonitor/commit/ddcf441f4c3cab2a5e3b62e9ff6aff1babf3bdfa)
- Release: [TrafficMonitor 1.0.48](https://github.com/Ding-Ding-Projects/TrafficMonitor/releases/tag/v1.0.48-run40021045002-1)
- Production run: [GitHub Actions run 40021045002](https://github.com/Ding-Ding-Projects/TrafficMonitor/actions/runs/40021045002)

## Build and deployment

Run `build.bat` to validate the static source and assemble `dist/`. GitHub Pages deploys the
checked-in static files from `main` through `.github/workflows/pages.yml`. This gallery has no
separate installable product, so `build-installer.bat` reports that installer production is not
applicable and exits unsuccessfully.
