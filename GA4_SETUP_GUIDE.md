# Google Analytics 4 设置指南

本指南将帮助您为学术网站配置 Google Analytics 4 访问统计功能。

## 第一步：创建 Google Analytics 账户和资源

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 使用您的 Google 账户登录
3. 点击"开始测量"或"管理"创建新的资源
4. 按照向导完成以下步骤：
   - 输入账户名称（例如：Lei Sang Academic Website）
   - 输入资源名称（例如：leisangcs.github.io）
   - 选择报告时区和货币
   - 选择行业类别（例如：教育）
   - 选择企业规模（例如：小型）

## 第二步：设置数据流

1. 在资源创建完成后，选择"网站"作为平台
2. 输入网站 URL：`https://leisangcs.github.io`
3. 输入数据流名称：`Lei Sang Homepage`
4. 点击"创建数据流"

## 第三步：获取测量 ID

1. 创建数据流后，您会看到"数据流详情"页面
2. 在页面顶部找到您的**测量 ID**（格式：`G-XXXXXXXXXX`）
3. 复制这个测量 ID，稍后会用到

## 第四步：配置环境变量

1. 在项目根目录创建 `.env` 文件（如果还没有的话）
2. 添加以下内容，将 `G-XXXXXXXXXX` 替换为您的实际测量 ID：

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**注意：** `.env` 文件已被添加到 `.gitignore`，不会被提交到 Git 仓库，这样可以保护您的配置信息。

## 第五步：本地测试

1. 安装依赖（如果还没有安装）：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm dev
```

3. 在浏览器中打开 `http://localhost:3000`
4. 打开浏览器的开发者工具（F12）
5. 在 Network 标签页中，筛选 `gtag` 或 `google-analytics`，应该能看到相关请求

## 第六步：部署到 GitHub Pages

### 方法 1：使用 GitHub Secrets（推荐）

1. 在 GitHub 仓库页面，进入 `Settings` > `Secrets and variables` > `Actions`
2. 点击 `New repository secret`
3. 添加以下 secret：
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: 您的测量 ID（例如：`G-XXXXXXXXXX`）

4. 修改 `.github/workflows/deploy.yml` 文件，在构建步骤中添加环境变量：

```yaml
- name: Build
  run: pnpm build
  env:
    VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
```

### 方法 2：直接在代码中配置（不推荐用于公开仓库）

如果您的仓库是私有的，也可以直接创建 `.env.production` 文件：

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

然后提交到仓库。但请注意，这会将您的测量 ID 公开。

## 第七步：验证数据收集

1. 部署完成后，访问您的网站：`https://leisangcs.github.io`
2. 返回 Google Analytics 控制台
3. 进入"报告" > "实时"
4. 您应该能看到当前的活跃用户（即您自己）
5. 等待 24-48 小时后，可以在"报告"中查看详细的访问统计数据

## 可用的统计数据

Google Analytics 4 将自动收集以下数据：

- **页面浏览量**：总访问次数
- **用户数量**：独立访客数
- **会话数**：访问会话数
- **平均会话时长**：用户停留时间
- **跳出率**：只访问一个页面就离开的比例
- **流量来源**：访客来自哪里（搜索引擎、直接访问、推荐链接等）
- **地理位置**：访客的国家和城市
- **设备信息**：桌面、移动设备、操作系统、浏览器等

## 查看统计报告

1. 登录 [Google Analytics](https://analytics.google.com/)
2. 选择您的资源
3. 在左侧菜单中：
   - **报告** > **实时**：查看当前活跃用户
   - **报告** > **生命周期** > **流量获取**：查看流量来源
   - **报告** > **用户** > **用户属性**：查看用户地理位置和设备信息
   - **探索**：创建自定义报告和可视化

## 常见问题

### Q: 为什么看不到数据？
A: 
- 确认测量 ID 配置正确
- 检查浏览器是否启用了广告拦截器（可能会阻止 GA 脚本）
- 等待 24-48 小时，数据可能需要一些时间才能显示

### Q: 如何排除自己的访问？
A: 
1. 在 Google Analytics 中，进入"管理" > "数据流"
2. 点击您的数据流
3. 在"Google 代码"下，点击"配置代码设置"
4. 选择"定义内部流量"
5. 添加您的 IP 地址

### Q: 如何添加自定义事件跟踪？
A: 如果需要跟踪特定的用户行为（如点击某个链接、下载论文等），可以使用 `gtag()` 函数：

```javascript
// 在 React 组件中
const handleDownload = (paperTitle) => {
  // 发送自定义事件
  if (window.gtag) {
    window.gtag('event', 'paper_download', {
      'paper_title': paperTitle,
      'event_category': 'engagement',
      'event_label': paperTitle
    });
  }
  // 继续下载逻辑...
};
```

## 技术说明

- 使用 Google Analytics 4 (GA4) 最新版本
- 通过 gtag.js 直接集成
- 使用 Vite 环境变量进行配置管理
- 代码已添加到 `client/index.html` 的 `<head>` 部分
- 环境变量格式：`VITE_GA_MEASUREMENT_ID`

## 隐私说明

Google Analytics 会收集访客的匿名数据。如果您关心隐私问题，建议：

1. 在网站上添加隐私政策说明
2. 考虑启用 IP 匿名化（GA4 默认已启用）
3. 遵守 GDPR 和其他相关法规

## 支持

如有问题，请参考：
- [Google Analytics 帮助中心](https://support.google.com/analytics)
- [GA4 开发者文档](https://developers.google.com/analytics/devguides/collection/ga4)
