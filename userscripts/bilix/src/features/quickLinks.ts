// 获取用户ID的函数（逻辑保持不变）
function getUserIdFromPage(): string | null {
  const headerLinks = document.querySelectorAll('a.header-entry-avatar, a.header-entry-mini');
  if (headerLinks.length > 0) {
    for (let link of headerLinks) {
      const href = link.getAttribute('href');
      if (href) {
        const match = href.match(/space\.bilibili\.com\/(\d+)/);
        if (match && match[1]) {
          return match[1];
        }
      }
    }
  }

  const infoNameElement = document.querySelector('.info__name');
  if (infoNameElement) {
    let parent = infoNameElement.parentElement;
    while (parent && parent !== document.body) {
      const link = parent.querySelector('a[href*="space.bilibili.com"]');
      if (link) {
        const match = link.getAttribute('href')?.match(/space\.bilibili\.com\/(\d+)/);
        if (match && match[1]) {
          return match[1];
        }
      }
      parent = parent.parentElement;
    }
  }
  return null;
}

// 创建快捷链接配置
interface LinkItem {
  text: string;
  url: string;
  icon: string;
}

export function createQuickLinks() {
  const userId = getUserIdFromPage() || '3111462'; // 默认值

  const quickLinks: LinkItem[] = [
    {
      text: '稍后再看',
      url: 'https://www.bilibili.com/list/watchlater',
      icon: `<svg class="vui_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16 4.74968C9.78681 4.74968 4.750023333333333 9.786476666666665 4.750023333333333 15.999733333333333C4.750023333333333 22.212899999999998 9.78681 27.24973333333333 16 27.24973333333333C19.106216666666665 27.24973333333333 21.917133333333332 25.991816666666665 23.95375 23.955866666666665C24.24668333333333 23.663066666666666 24.721466666666664 23.663083333333333 25.0144 23.956016666666663C25.307199999999998 24.248966666666664 25.307066666666664 24.723866666666666 25.01423333333333 25.016683333333333C22.7078 27.322316666666666 19.519916666666667 28.74973333333333 16 28.74973333333333C8.958386666666666 28.74973333333333 3.2500233333333335 23.04135 3.2500233333333335 15.999733333333333C3.2500233333333335 8.958043333333332 8.958386666666666 3.24968 16 3.24968C23.04161666666667 3.24968 28.75 8.958043333333332 28.75 15.999733333333333C28.75 16.47798333333333 28.72368333333333 16.95038333333333 28.672283333333333 17.415416666666665C28.6267 17.827166666666663 28.256049999999995 18.124016666666666 27.84443333333333 18.078433333333333C27.4327 18.032966666666667 27.13583333333333 17.662316666666666 27.1813 17.25058333333333C27.226699999999997 16.84015 27.25 16.4228 27.25 15.999733333333333C27.25 9.786476666666665 22.213183333333333 4.74968 16 4.74968z" fill="currentColor"></path><path d="M24.803066666666666 14.802666666666667C25.095883333333333 14.509733333333333 25.57078333333333 14.509733333333333 25.863716666666665 14.802666666666667L28 16.93895L30.1364 14.802666666666667C30.429216666666665 14.509733333333333 30.904116666666667 14.509733333333333 31.197049999999997 14.802666666666667C31.489866666666664 15.095616666666666 31.489866666666664 15.570383333333332 31.197049999999997 15.863333333333333L28.766 18.294266666666665C28.34303333333333 18.717333333333332 27.657083333333333 18.717333333333332 27.233999999999998 18.294266666666665L24.803066666666666 15.863333333333333C24.510133333333332 15.570383333333332 24.510133333333332 15.095616666666666 24.803066666666666 14.802666666666667z" fill="currentColor"></path><path d="M19.83223333333333 14.89335C20.683899999999998 15.385 20.683899999999998 16.614166666666666 19.83223333333333 17.105816666666666L15.039966666666666 19.872716666666665C14.188416666666665 20.364366666666665 13.12385 19.74973333333333 13.12385 18.766416666666665L13.12385 13.232789999999998C13.12385 12.249416666666665 14.188416666666665 11.634813333333334 15.039966666666666 12.1265L19.83223333333333 14.89335z" fill="currentColor"></path></svg>`    },
    {
      text: '追番追剧',
      url: `https://space.bilibili.com/${userId}/bangumi`,
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="left-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1341 3.47008C12.2509 2.7224 11.3038 2.32643 10.3416 2.33309C9.50944 2.33885 8.71821 2.6454 7.99925 3.20006C7.27334 2.6448 6.46993 2.35 5.63491 2.35001C4.67091 2.35001 3.72491 2.74282 2.86584 3.47008C1.90596 4.28267 1.48773 5.54941 1.50027 6.80068C1.51285 8.05482 1.95626 9.36699 2.81582 10.3301C4.50628 12.2242 6.53299 13.742 7.34743 14.3217C7.73897 14.6004 8.25998 14.6011 8.65226 14.3233C9.46981 13.7443 11.5062 12.2251 13.1854 10.3286C14.0435 9.35946 14.4871 8.04833 14.4997 6.79541C14.5123 5.54527 14.0936 4.28237 13.1341 3.47008ZM11.6098 6.23202C11.8034 6.42886 11.8008 6.74544 11.604 6.9391L8.22781 10.2608C7.83865 10.6436 7.21432 10.6436 6.82516 10.2608L5.06934 8.53331C4.87249 8.33964 4.86992 8.02307 5.06358 7.82622C5.25725 7.62938 5.57382 7.6268 5.77067 7.82047L7.52648 9.54793L10.9027 6.22626C11.0995 6.0326 11.4161 6.03517 11.6098 6.23202Z" fill="currentColor"></path></svg>`
    }
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'tm-quick-links';

  quickLinks.forEach((item) => {
    const linkDiv = document.createElement('div');
    linkDiv.className = 'tm-quick-links-item';
    linkDiv.innerHTML = `${item.icon}<span>${item.text}</span>`;
    linkDiv.addEventListener('click', () => {
      window.open(item.url, '_blank');
    });
    wrapper.appendChild(linkDiv);
  });

  return wrapper;
}

export function makeSectionSticky() {
  const leftAside = document.querySelector('aside.left');
  if (leftAside) {
    const section = leftAside.querySelector('section');
    if (section && !section.classList.contains('sticky')) {
      section.classList.add('sticky');
    }
  }
}

let isStyleInjected = false;

export function fixLiveUsersTop() {
  const liveUsersElement = document.querySelector('aside.left div.bili-dyn-live-users');
  
  if (!liveUsersElement) {
    return;
  }

  if (isStyleInjected) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'bili-enhancer-fix-style';
  style.textContent = `
    aside.left div.bili-dyn-live-users {
      top: 322px !important;
    }
  `;
  document.head.appendChild(style);
  isStyleInjected = true;
}

function createLinkElements(container: HTMLElement) {
  if (container.querySelector('.tm-quick-links')) {
    return;
  }
  const links = createQuickLinks();
  container.appendChild(links);
}

export function initDynamicPageFeatures() {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const target = document.querySelector('.bili-dyn-my-info') as HTMLElement;
        if (target) {
          createLinkElements(target);
          makeSectionSticky();
          fixLiveUsersTop();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
