import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        namespace: 'https://github.com/ivestszheng/userscripts',
        homepage: 'https://github.com/ivestszheng/userscripts',
        downloadURL: 'https://raw.githubusercontent.com/ivestszheng/userscripts/dist/bilibili-enhancer.user.js',
        updateURL: 'https://raw.githubusercontent.com/ivestszheng/userscripts/dist/bilibili-enhancer.user.js',
        match: ['https://*.bilibili.com/*'],
      },
    }),
  ],
});
