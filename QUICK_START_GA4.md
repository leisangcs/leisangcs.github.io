# Google Analytics 4 快速配置指南

## 🚀 三步完成配置

### 步骤 1：获取 Google Analytics 测量 ID

1. 访问 https://analytics.google.com/
2. 创建账户和资源（如果还没有）
3. 创建网站数据流，获取测量 ID（格式：`G-XXXXXXXXXX`）

### 步骤 2：配置 GitHub Secret

1. 进入 GitHub 仓库：https://github.com/leisangcs/leisangcs.github.io
2. 点击 `Settings` > `Secrets and variables` > `Actions`
3. 点击 `New repository secret`
4. 添加：
   - **Name**: `VITE_GA_MEASUREMENT_ID`
   - **Value**: 您的测量 ID（例如：`G-ABC123XYZ`）
5. 点击 `Add secret`

### 步骤 3：提交代码并部署

代码已经准备好了！只需提交并推送：

```bash
git add .
git commit -m "Add Google Analytics 4 tracking"
git push origin main
```

GitHub Actions 会自动构建和部署，几分钟后访问统计功能就会生效！

## ✅ 验证

1. 访问您的网站：https://leisangcs.github.io
2. 打开 Google Analytics 控制台
3. 查看"实时"报告，应该能看到您的访问

## 📊 查看统计数据

登录 Google Analytics 后，您可以查看：
- 访问量和用户数
- 流量来源
- 访客地理位置
- 设备和浏览器信息
- 页面浏览时长

## 📖 详细文档

更多信息请查看：[GA4_SETUP_GUIDE.md](./GA4_SETUP_GUIDE.md)
