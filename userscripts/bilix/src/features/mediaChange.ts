import Cookies from 'js-cookie';

const COOKIE_NAME = 'theme_style';
const STORAGE_KEY = 'bilix_theme_style';
const HTML_DARK_CLASS = 'bili_dark';

function applyTheme(isDark: boolean) {
  if (isDark) {
    Cookies.set(COOKIE_NAME, 'dark');
    document.documentElement.classList.add(HTML_DARK_CLASS);
  } else {
    Cookies.set(COOKIE_NAME, 'light');
    document.documentElement.classList.remove(HTML_DARK_CLASS);
  }
}

function getThemeFromCookie(): 'dark' | 'light' | null {
  const cookieValue = Cookies.get(COOKIE_NAME);
  if (cookieValue === 'dark' || cookieValue === 'light') {
    return cookieValue;
  }
  return null;
}

function getThemeFromStorage(): 'dark' | 'light' | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'dark' || value === 'light') {
      return value;
    }
  } catch (e) {
    // localStorage 可能在隐私模式或受限环境中不可用，静默失败
  }
  return null;
}

function syncTheme(isDark: boolean) {
  applyTheme(isDark);
  try {
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  } catch (e) {
    // localStorage 可能在隐私模式或受限环境中不可用，静默失败
  }
}

function initTheme() {
  const cookieTheme = getThemeFromCookie();
  const storageTheme = getThemeFromStorage();
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let finalTheme: boolean;
  
  if (cookieTheme !== null) {
    finalTheme = cookieTheme === 'dark';
  } else if (storageTheme !== null) {
    finalTheme = storageTheme === 'dark';
  } else {
    finalTheme = systemDark;
  }
  
  applyTheme(finalTheme);
  try {
    localStorage.setItem(STORAGE_KEY, finalTheme ? 'dark' : 'light');
  } catch (e) {
  }
}

export function initDarkModeObserver() {
  const mqList = window.matchMedia('(prefers-color-scheme: dark)');

  initTheme();

  const handleMediaChange = (event: MediaQueryListEvent) => {
    syncTheme(event.matches);
  };

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY && event.newValue !== null) {
      applyTheme(event.newValue === 'dark');
    }
  };

  try {
    mqList.addEventListener('change', handleMediaChange);
  } catch (e) {
    try {
      // 旧版浏览器使用 addListener 而不是 addEventListener
      mqList.addListener(handleMediaChange);
    } catch (e2) {
      // 两种方法都失败，静默处理
    }
  }

  try {
    window.addEventListener('storage', handleStorageChange);
  } catch (e) {
    // storage 事件监听在某些受限环境中可能不可用，静默处理
  }
}