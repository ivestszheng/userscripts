# bilix

一个增强 Bilibili 动态页面体验的用户脚本。

## 功能特性

- 🚀 **快捷链接** - 在动态页面侧边栏添加常用功能的快捷入口
  - 稍后再看
  - 追番追剧
- 📌 **侧边栏固定** - 让侧边栏区域保持粘性
- 🎨 **样式优化** - 修复直播用户区域的布局问题

## 安装

### 从 GitHub Releases 安装

1. 安装一个用户脚本管理器（如 Tampermonkey、Violentmonkey）
2. 前往 [Latest Release](https://github.com/ivestszheng/userscripts/releases/latest)
3. 下载 `bilix.user.js`
4. 用户脚本管理器会自动识别并提示安装

## 使用说明

安装后，访问 Bilibili 动态页面（t.bilibili.com），脚本会自动运行。

### 快捷链接

在侧边栏的个人信息区域下方，会显示快捷链接面板，点击即可快速跳转到对应的页面。

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## 技术栈

- TypeScript
- Vite
- vite-plugin-monkey

## 许可证

MIT License
