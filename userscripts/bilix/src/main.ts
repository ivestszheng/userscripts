import './style.css';
import { initDarkModeObserver } from './features/mediaChange';
import { initDynamicPageFeatures } from './features/quickLinks';
import { initSpeedPersistence } from './features/speedPersistence';

// 页面类型判断辅助函数
const isDynamicPage = () => window.location.hostname.includes('t.bilibili.com');
const isVideoPage = () => window.location.pathname.startsWith('/video/');

(() => {
  // 深色模式监听全局生效
  initDarkModeObserver();
  
  // 动态页面功能
  if (isDynamicPage()) {
    initDynamicPageFeatures();
  }
  
  // 视频页倍速持久化
  if (isVideoPage()) {
    initSpeedPersistence();
  }
})();
