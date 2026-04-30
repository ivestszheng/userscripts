import Cookies from 'js-cookie';

const COOKIE_NAME = 'theme_style';
const HTML_DARK_CLASS = 'bili_dark';

function updateTheme(isDark: boolean) {
  if (isDark) {
    Cookies.set(COOKIE_NAME, 'dark');
    document.documentElement.classList.add(HTML_DARK_CLASS);
  } else {
    Cookies.set(COOKIE_NAME, 'light');
    document.documentElement.classList.remove(HTML_DARK_CLASS);
  }
}

export function initDarkModeObserver() {
  const mqList = window.matchMedia('(prefers-color-scheme: dark)');

  // 立即设置初始值
  updateTheme(mqList.matches);

  // 监听变化
  const handleChange = (event: MediaQueryListEvent) => {
    updateTheme(event.matches);
  };

  try {
    mqList.addEventListener('change', handleChange);
  } catch (e) {
    try {
      mqList.addListener(handleChange);
    } catch (e2) {
      // 静默失败
    }
  }
}
