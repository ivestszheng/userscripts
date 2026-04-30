import Cookies from 'js-cookie';

// 配置常量
const COOKIE_KEY = 'bilix_playback_rate'; // Cookie 键名
const PLAYER_SELECTOR = '.bpx-player-video-wrap'; // B站播放器容器

/**
 * 从 Cookie 恢复倍速
 */
function restoreSpeedFromCookie() {
  const playerWrap = document.querySelector(PLAYER_SELECTOR);
  
  // 安全检查：确保元素存在
  if (!playerWrap || !playerWrap.childNodes[0]) return;

  const video = playerWrap.childNodes[0] as HTMLVideoElement;
  const savedRate = Cookies.get(COOKIE_KEY);
  
  if (savedRate) {
    const rate = parseFloat(savedRate);
    // 简单的合法性校验，防止出现 NaN 或极端值
    if (!isNaN(rate) && rate >= 0.1 && rate <= 16.0) { 
      video.playbackRate = rate;
      // 静默恢复，不打扰用户
    }
  }
}

/**
 * 监听倍速变化并写入 Cookie
 * @param video - 视频元素
 */
function observeAndSaveSpeed(video: HTMLVideoElement) {
  let lastRate = video.playbackRate;

  const handleRateChange = () => {
    // 防抖：如果和上次记录的值一样，不处理
    if (video.playbackRate === lastRate) return;
    
    lastRate = video.playbackRate;
    
    try {
      // 写入 Cookie，有效期 365 天
      Cookies.set(COOKIE_KEY, lastRate.toString(), { expires: 365 });
      // 静默保存
    } catch (err) {
      // 只有出错才打印，方便排查问题
      console.error('[BiliX] Cookie 写入失败:', err);
    }
  };

  // 绑定事件监听器
  video.addEventListener('ratechange', handleRateChange);

  // 返回一个清理函数，虽然在这个简单场景下不是必须的，但在复杂应用中是好习惯
  return () => {
    video.removeEventListener('ratechange', handleRateChange);
  };
}

/**
 * 主初始化函数
 * 暴露给外部调用
 */
export function initSpeedPersistence() {
  const playerWrap = document.querySelector(PLAYER_SELECTOR);
  
  if (!playerWrap || !playerWrap.childNodes[0]) {
    // 初始化失败时给出一个警告，方便调试
    console.warn('[BiliX] 播放器未就绪，倍速持久化初始化失败');
    return;
  }

  const video = playerWrap.childNodes[0] as HTMLVideoElement;
  
  // 1. 先恢复上次的倍速
  restoreSpeedFromCookie();
  
  // 2. 再开启监听，保存未来的变化
  observeAndSaveSpeed(video);
  
  // 可以在这里加一个 console.log('[BiliX] 倍速持久化模块已启动') 用于确认
}