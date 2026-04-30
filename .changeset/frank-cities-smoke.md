---
"bilix": patch
---

优化倍速持久化功能实现
- 重构代码结构，提取公共方法 findVideo
- 增加初始化状态检查和重试机制
- 使用 MutationObserver 监听播放器加载
- 移除冗余注释，简化逻辑