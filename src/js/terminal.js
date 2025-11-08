// Settings
const SITE_VERSION = "v1.0.0";

function updateTerminal() {
  const coords = window._mouseCoords || { x: 0, y: 0 };
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = Math.round((scrollTop / docHeight) * 100);

  document.getElementById('terminal-body').innerHTML = `
    <div><span class="terminal-label">Site:</span> cedperez.com</div>
    <div><span class="terminal-label">Version:</span> ${SITE_VERSION}</div>
    <div><span class="terminal-label">Mouse:</span> <span class="terminal-coords">x:${coords.x} y:${coords.y}</span></div>
    <div class="terminal-scroll">
      <span class="terminal-label">Scroll:</span> ${scrollPercent}% 
      ${scrollPercent > 90 ? '<span style="color:#E63E43;">(Bottom approaching)</span>' : ''}
    </div>
  `;
}

// Mouse coordinates
window._mouseCoords = { x: 0, y: 0 };
window.addEventListener('mousemove', e => {
  window._mouseCoords = { x: e.clientX, y: e.clientY };
  updateTerminal();
});

// Scroll cue and show/hide logic
let terminalVisible = false;
window.addEventListener('scroll', () => {
  updateTerminal();
  const scrollTop = window.scrollY;
  if (scrollTop > 120 && !terminalVisible) {
    document.getElementById('floating-terminal').classList.add('visible');
    terminalVisible = true;
  } else if (scrollTop <= 120 && terminalVisible) {
    document.getElementById('floating-terminal').classList.remove('visible');
    terminalVisible = false;
  }
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  updateTerminal();

  const terminal = document.getElementById('floating-terminal');
  const minimizeBtn = terminal.querySelector('.terminal-minimize');
  const maximizeBtn = terminal.querySelector('.terminal-maximize');
  const closeBtn = terminal.querySelector('.terminal-close');

  minimizeBtn.onclick = () => {
    terminal.classList.remove('maximized');
    terminal.classList.add('minimized');
  };
  maximizeBtn.onclick = () => {
    terminal.classList.remove('minimized');
    terminal.classList.toggle('maximized');
  };
  closeBtn.onclick = () => {
    terminal.classList.remove('visible', 'minimized', 'maximized');
    terminal.classList.add('closed');
  };

  // Restore from minimized when clicking the minimized bar
  terminal.addEventListener('click', (e) => {
    if (terminal.classList.contains('minimized') && e.target === terminal) {
      terminal.classList.remove('minimized');
    }
  });
});