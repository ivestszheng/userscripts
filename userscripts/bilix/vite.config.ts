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
        downloadURL: 'https://github.com/ivestszheng/userscripts/releases/latest/download/bilix.user.js',
        updateURL: 'https://github.com/ivestszheng/userscripts/releases/latest/download/bilix.user.js',
        icon: 'https://www.bilibili.com/favicon.ico',
        match: ['https://*.bilibili.com/*'],
      },
    }),
  ],
});
