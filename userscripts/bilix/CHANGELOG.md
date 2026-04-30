# bilix

## 0.2.1

### Patch Changes

- [`421ae41`](https://github.com/ivestszheng/userscripts/commit/421ae41467baa1fc9e0b532f6d5da5b177fa11ea) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 优化倍速持久化功能实现
  - 重构代码结构，提取公共方法 findVideo
  - 增加初始化状态检查和重试机制
  - 使用 MutationObserver 监听播放器加载
  - 移除冗余注释，简化逻辑

## 0.2.0

### Minor Changes

- [`4d5fb21`](https://github.com/ivestszheng/userscripts/commit/4d5fb21e2568d8089ee33a3f89e70512b60ad36a) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 添加随系统切换深色模式和视频倍速持久化功能
  - 新增深色模式自动切换功能，根据系统偏好设置主题
  - 实现视频播放倍速持久化，保存用户设置
  - 重构动态页面功能代码，优化模块化结构

## 0.1.6

### Patch Changes

- [`361b1fa`](https://github.com/ivestszheng/userscripts/commit/361b1fafe355bef73863dcdd30d20e7c4975c94d) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 将项目名称从 bilibili-enhancer 更改为 bilix

## 0.1.5

### Patch Changes

- [`d1fc661`](https://github.com/ivestszheng/userscripts/commit/d1fc6614e7d6a64948523924f01e04150fb7366a) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 修改包名以及增加描述

## 0.1.4

### Patch Changes

- [`a1c3fa1`](https://github.com/ivestszheng/userscripts/commit/a1c3fa17528e83760619bc1d50ff060f58cd26ff) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 更新脚本下载链接至最新发布版本

## 0.1.3

### Patch Changes

- [`0901e39`](https://github.com/ivestszheng/userscripts/commit/0901e3947c48fad829eb704c14d0b9f00fa03e1d) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 把 downloadURL 和 updateURL 改为 raw 地址

## 0.1.2

### Patch Changes

- [`772ee0c`](https://github.com/ivestszheng/userscripts/commit/772ee0c9420dbda305231715347601a4b5b83db2) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 添加 bilix 的元数据信息

## 0.1.1

### Patch Changes

- [`3872ac6`](https://github.com/ivestszheng/userscripts/commit/3872ac674a887e1ccfdb8f14a2a4563fdd8ee4ed) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 添加更新 URL 并重构 CI 工作流
  - 添加 bilix 的 updateURL 配置
  - 重构 CI 工作流，合并 release 和 build 步骤
  - 删除旧的 release.yml 工作流文件

## 0.1.0

### Minor Changes

- [`d661bfa`](https://github.com/ivestszheng/userscripts/commit/d661bfa3a2066f7d6b566a668f1a64c5e725e338) Thanks [@ivestszheng](https://github.com/ivestszheng)! - 添加 B 站动态页增强功能
  - 添加用户脚本以增强 B 站动态页体验，包括快速链接、固定侧边栏和修复直播用户列表位置
