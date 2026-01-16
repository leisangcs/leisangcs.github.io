# 部署指南：leisangcs.github.io

本指南将帮助您将个人学术主页部署到 GitHub Pages。

## 步骤 1：准备 GitHub 仓库

1.  登录您的 GitHub 账号。
2.  创建一个新的**公开 (Public)** 仓库。
3.  **重要**：仓库名称必须完全匹配 `leisangcs.github.io`。
    *   如果您的 GitHub 用户名是 `leisangcs`，则仓库名应为 `leisangcs.github.io`。
    *   这样您的网站将直接通过 `https://leisangcs.github.io` 访问，而不是子路径。

## 步骤 2：上传代码

您可以通过以下两种方式之一上传代码：

### 方式 A：使用 Git 命令行（推荐）

1.  在本地项目根目录下初始化 Git：
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  关联远程仓库（替换为您实际的仓库地址）：
    ```bash
    git remote add origin https://github.com/leisangcs/leisangcs.github.io.git
    ```
3.  推送到 GitHub：
    ```bash
    git branch -M main
    git push -u origin main
    ```

### 方式 B：直接上传文件

1.  在 GitHub 仓库页面，点击 "Add file" -> "Upload files"。
2.  将项目文件夹中的所有文件（包括隐藏的 `.github` 文件夹）拖入上传区域。
3.  提交更改。

## 步骤 3：配置 GitHub Pages

1.  进入仓库的 **Settings** (设置) 页面。
2.  在左侧菜单中点击 **Pages**。
3.  在 **Build and deployment** 部分：
    *   **Source**: 选择 **GitHub Actions**。
    *   (无需其他配置，因为我们已经添加了 `.github/workflows/deploy.yml` 文件)

## 步骤 4：等待部署

1.  点击仓库上方的 **Actions** 标签页。
2.  您应该能看到一个名为 "Deploy to GitHub Pages" 的工作流正在运行。
3.  等待图标变成绿色对勾（通常需要 1-2 分钟）。

## 步骤 5：访问网站

部署成功后，您的网站即可通过以下地址访问：
**https://leisangcs.github.io**

---

## 常见问题

**Q: 网站显示 404 错误？**
A: 
1. 检查仓库名是否正确拼写为 `leisangcs.github.io`。
2. 确保在 Settings -> Pages 中选择了 "GitHub Actions" 作为源。
3. 等待几分钟，DNS 刷新可能需要时间。

**Q: 样式加载失败或路径错误？**
A: 检查 `vite.config.ts` 中的 `base` 配置。对于 `leisangcs.github.io` 这种根域名仓库，`base` 应该为 `/`（默认值）。如果您部署到子路径（如 `leisangcs.github.io/my-page`），则需要修改配置。
