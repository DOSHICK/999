const MIN_POPUP_SCREEN_W = 1024;
const SIDEBAR_URL        = 'window.html';
const SIDEBAR_WIDTH      = 400;
const SIDEBAR_HEIGHT     = 500;
let sidebarWin = null;

function openSidebarWindow() {
  if (window.innerWidth < MIN_POPUP_SCREEN_W) {
    window.open(SIDEBAR_URL, '_blank', 'noopener');
    return;
  }

  const baseFeatures = [
    `width=${SIDEBAR_WIDTH}`,
    `height=${SIDEBAR_HEIGHT}`,
    'top=0',
    `left=${screen.availWidth - SIDEBAR_WIDTH}`,
    'resizable=no',
    'toolbar=no',
    'menubar=no',
    'scrollbars=no',
    'status=no',
    'location=no'
  ].join(',');

  const features = ['noopener','noreferrer', baseFeatures].join(',');

  if (!sidebarWin || sidebarWin.closed) {
    sidebarWin = window.open(SIDEBAR_URL, '_blank', features);
  } else {
    sidebarWin.focus();
  }
}

function bindSidebarOpeners() {
  const selector = 'a, button, .style_downloadItem__g3VwF, .style_followUsItem__o-Y3F';
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      setTimeout(openSidebarWindow, 0);
    });
  });
}

window.addEventListener('DOMContentLoaded', bindSidebarOpeners);
