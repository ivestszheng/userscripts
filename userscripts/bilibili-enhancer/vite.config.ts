import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        namespace: 'https://github.com/ivestszheng/userscripts',
        downloadURL: 'https://github.com/ivestszheng/userscripts/releases/latest/download/bilibili-enhancer.user.js',
        match: ['https://*.bilibili.com/*'],
      },
    }),
  ],
});
