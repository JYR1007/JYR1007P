document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const modeLabel = document.getElementById('mode-label');

  setTheme('dark');

  themeToggle.addEventListener('click', function() {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      themeToggle.classList.add('active');
      modeLabel.textContent = '다크 모드';
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      themeToggle.classList.remove('active');
      modeLabel.textContent = '라이트 모드';
    }
  }
});