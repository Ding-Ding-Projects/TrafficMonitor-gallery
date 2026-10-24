const images = [
  { id: 'setup-language', group: 'setup', title: 'Setup: language and message style', file: 'images/setup-language.png', description: 'First-run language and message-style step; actual scrollable preferences region.', captured: '2026-10-24T01:28:07.446861+00:00', width: 776, height: 679, sha256: '3ad9d4355356a6fccc73dd8ad2d54bc4ef402e50cd9c47e0179fc38937e143fa' },
  { id: 'setup-startup', group: 'setup', title: 'Setup: startup and taskbar', file: 'images/setup-startup.png', description: 'First-run startup and taskbar review with both choices kept unchanged.', captured: '2026-10-24T01:28:20.862585+00:00', width: 776, height: 679, sha256: 'cfdd6457a223412fe20c8200f4f4ccdf7bb55b59006e4fc891bf6f8fc0e00169' },
  { id: 'settings-interface', group: 'settings', title: 'Settings: interface', file: 'images/settings-interface.png', description: 'Interface settings with startup defaults, English, and system light appearance.', captured: '2026-10-24T01:29:21.627687+00:00', width: 1296, height: 879, sha256: '4b721e98b7560ebd8079cc51c7b1b98ed8449f89428c296361004adf454734af' },
  { id: 'settings-notifications', group: 'settings', title: 'Settings: notifications', file: 'images/settings-notifications.png', description: 'Notifications settings; hardware capabilities are disabled in this state.', captured: '2026-10-24T01:29:25.755687+00:00', width: 1296, height: 879, sha256: '693e0648a8ceb4dedc8a336fc8f64a3f996ba535b1384c0a96abae3eb802d7ba' },
  { id: 'regex-test-valid', group: 'regex', title: 'Regular expressions: local test', file: 'images/regex-test-valid.png', description: 'Local test result with two matches at offsets 0 and 12, each length 10.', captured: '2026-10-24T01:31:10.385070+00:00', width: 1296, height: 879, sha256: '6439ece46a79671909c45484ad647656b4ff51ec903076750c927f2b433850af' },
  { id: 'regex-replace-valid', group: 'regex', title: 'Regular expressions: replacement preview', file: 'images/regex-replace-valid.png', description: 'Local literal replacement preview: shipment, shipment, shipped.', captured: '2026-10-24T01:31:06.301571+00:00', width: 1296, height: 879, sha256: '77092000e751e4c38070313c2d23a8c9153b4054eaf112b5900d819ca87a6e57' }
];
const grid = document.querySelector('#image-grid');
const filter = document.querySelector('#group-filter');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty-state');
const dialog = document.querySelector('#image-dialog');
let returnFocus;
function render() {
  const shown = images.filter(image => filter.value === 'all' || image.group === filter.value);
  grid.replaceChildren(...shown.map(image => {
    const article = document.createElement('article'); article.className = 'card';
    const button = document.createElement('button'); button.type = 'button'; button.setAttribute('aria-label', `View ${image.title}, before-state evidence`);
    const preview = document.createElement('img'); preview.src = image.file; preview.alt = `Released interface: ${image.description}`; preview.loading = 'lazy';
    const copy = document.createElement('div'); copy.className = 'card-copy';
    const badge = document.createElement('span'); badge.className = 'badge'; badge.textContent = 'Released before-state';
    const title = document.createElement('h3'); title.textContent = image.title;
    const description = document.createElement('p'); description.textContent = image.description;
    copy.append(badge, title, description); button.append(preview, copy); article.append(button);
    button.addEventListener('click', () => openImage(image, button)); return article;
  }));
  count.textContent = `${shown.length} ${shown.length === 1 ? 'image' : 'images'}`; empty.hidden = shown.length !== 0;
}
function openImage(image, opener) {
  returnFocus = opener; document.querySelector('#dialog-title').textContent = image.title;
  const large = document.querySelector('#dialog-image'); large.src = image.file; large.alt = `Released before-state: ${image.description}`;
  document.querySelector('#dialog-description').textContent = `${image.description} Captured ${new Intl.DateTimeFormat('en', { dateStyle: 'long', timeStyle: 'long', timeZone: 'UTC', timeZoneName: 'short' }).format(new Date(image.captured))}. ${image.width} by ${image.height} pixels.`;
  dialog.showModal(); document.querySelector('#close-dialog').focus();
}
filter.addEventListener('change', render);
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => returnFocus?.focus());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
render();
