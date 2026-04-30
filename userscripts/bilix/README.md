# bilix

一个增强 Bilibili 体验的用户脚本。

## 功能特性

### 动态页面 (t.bilibili.com)
- 🚀 **快捷链接** - 在侧边栏添加常用功能的快捷入口
  - 稍后再看
  - 追番追剧
- 📌 **侧边栏固定** - 让侧边栏区域保持粘性
- 🎨 **样式优化** - 修复直播用户区域的布局问题

### 视频页面
- ⚡ **倍速持久化** - 自动记住并恢复你的视频播放速度
- 🌙 **深色模式** - 自动跟随系统深色模式设置

### 全局功能
- 🌙 **深色模式** - 自动检测并应用系统主题设置

## 安装

### 从 GitHub Releases 安装

1. 安装一个用户脚本管理器（如 Tampermonkey、Violentmonkey）
2. 前往 [Latest Release](https://github.com/ivestszheng/userscripts/releases/latest)
3. 下载 `bilix.user.js`
4. 用户脚本管理器会自动识别并提示安装

## 使用说明

安装后，脚本会自动在以下页面运行：

### 动态页面 (t.bilibili.com)
在侧边栏的个人信息区域下方，会显示快捷链接面板，点击即可快速跳转到对应的页面。

### 视频页面
- **倍速持久化**：调整播放速度后，下次打开视频会自动恢复到上次的速度
- **深色模式**：自动跟随系统设置切换深色/浅色主题

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
