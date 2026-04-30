import Cookies from 'js-cookie';

const COOKIE_KEY = 'bilix_playback_rate';
const PLAYER_SELECTOR = '.bpx-player-video-wrap';

let initialized = false;

function findVideo(): HTMLVideoElement | null {
  const playerWrap = document.querySelector(PLAYER_SELECTOR);
  if (!playerWrap) return null;
  const video = playerWrap.querySelector('video');
  return video || (playerWrap.childNodes[0] as HTMLVideoElement);
}

function restoreSpeedFromCookie(video: HTMLVideoElement) {
  const savedRate = Cookies.get(COOKIE_KEY);
  if (savedRate) {
    const rate = parseFloat(savedRate);
    if (!isNaN(rate) && rate >= 0.1 && rate <= 16.0) {
      video.playbackRate = rate;
    }
  }
}

function observeAndSaveSpeed(video: HTMLVideoElement) {
  let lastRate = video.playbackRate;
  const handleRateChange = () => {
    if (video.playbackRate === lastRate) return;
    lastRate = video.playbackRate;
    try {
      Cookies.set(COOKIE_KEY, lastRate.toString(), { expires: 365 });
    } catch (err) {
      console.error('[BiliX] Cookie 写入失败:', err);
    }
  };
  video.addEventListener('ratechange', handleRateChange);
}

function tryInit(): boolean {
  if (initialized) return true;
  const video = findVideo();
  if (!video) return false;
  restoreSpeedFromCookie(video);
  observeAndSaveSpeed(video);
  initialized = true;
  return true;
}

export function initSpeedPersistence() {
  if (tryInit()) return;

  let retryCount = 0;
  const retryTimer = setInterval(() => {
    retryCount++;
    if (tryInit() || retryCount >= 50) {
      clearInterval(retryTimer);
    }
  }, 200);

  const observer = new MutationObserver(() => {
    if (tryInit()) {
      observer.disconnect();
      clearInterval(retryTimer);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  setTimeout(() => observer.disconnect(), 10000);
}