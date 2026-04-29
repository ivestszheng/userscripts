import './style.css';
import { createQuickLinks, fixLiveUsersTop, makeSectionSticky } from './features/quickLinks';

(() => {
  if (!window.location.hostname.includes('t.bilibili.com')) {
    return;
  }

  function createLinkElements(container: HTMLElement) {
    if (container.querySelector('.tm-quick-links')) {
      return;
    }
    const links = createQuickLinks();
    container.appendChild(links);
  }
  
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
})();
