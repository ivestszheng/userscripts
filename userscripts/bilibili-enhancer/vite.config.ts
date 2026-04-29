import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        namespace: 'https://github.com/ivestszheng/userscripts',
        description: '个人风格的增强 bilibili',
        license: 'MIT',
        homepage: 'https://github.com/ivestszheng/userscripts',
        downloadURL: 'https://github.com/ivestszheng/userscripts/releases/latest/download/bilibili-enhancer.user.js',
        updateURL: 'https://github.com/ivestszheng/userscripts/releases/latest/download/bilibili-enhancer.user.js',
        supportURL: 'https://github.com/ivestszheng/userscripts/issues',
        match: ['https://*.bilibili.com/*'],
      },
    }),
  ],
});
