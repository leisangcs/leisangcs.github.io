# 个人学术主页设计思路

<response>
<probability>0.05</probability>
<text>
<idea>
  **Design Movement**: Swiss Style (International Typographic Style)
  **Core Principles**: 清晰性、客观性、数学网格、非对称布局
  **Color Philosophy**: 以黑白灰为主，辅以深蓝色（#003366）作为强调色，传达专业、严谨和学术权威感。
  **Layout Paradigm**: 严格的模块化网格系统，左侧固定导航/个人信息，右侧内容滚动，利用负空间引导视线。
  **Signature Elements**: 粗线条分隔符、大号无衬线字体标题、对齐的文本块。
  **Interaction Philosophy**: 极简交互，鼠标悬停时微妙的颜色变化，强调内容的可读性和信息的直接传达。
  **Animation**: 页面加载时的淡入效果，滚动时的平滑过渡，避免过度装饰。
  **Typography System**: 使用 Helvetica 或 Inter 作为主要字体，通过字重（Bold/Regular/Light）区分层级，标题使用大字号，正文保持舒适的行高。
</idea>
</text>
</response>

<response>
<probability>0.05</probability>
<text>
<idea>
  **Design Movement**: Neo-Brutalism (新粗野主义)
  **Core Principles**: 原始、大胆、高对比度、功能主义
  **Color Philosophy**: 米色背景（#F5F5DC）搭配纯黑文字和边框，使用鲜艳的橙色（#FF4500）作为高亮，突出学术创新的活力。
  **Layout Paradigm**: 明显的边框分隔，卡片式布局，不规则的阴影，打破传统的对齐方式。
  **Signature Elements**: 粗黑边框、硬阴影、单色图标、复古计算机风格元素。
  **Interaction Philosophy**: 按钮点击时的位移效果（模拟物理按键），链接的高对比度悬停状态。
  **Animation**: 快速、直接的过渡，无模糊或渐变，强调机械感。
  **Typography System**: 使用等宽字体（如 JetBrains Mono 或 Roboto Mono）作为标题，配合高可读性的无衬线正文，营造代码和数据的氛围。
</idea>
</text>
</response>

<response>
<probability>0.05</probability>
<text>
<idea>
  **Design Movement**: Minimalist Paper (极简纸质风格)
  **Core Principles**: 质感、留白、优雅、阅读体验
  **Color Philosophy**: 暖白色背景（#FAFAFA）模拟纸张，深灰色文字（#333333）模拟墨水，淡雅的靛蓝色（#4B0082）作为点缀，营造沉静的学术氛围。
  **Layout Paradigm**: 单栏居中布局，类似论文排版，宽阔的页边距，强调文字的流线性。
  **Signature Elements**: 微妙的纸张纹理（可选）、衬线字体标题、优雅的分隔线、脚注式的元数据展示。
  **Interaction Philosophy**: 像翻阅书页一样的流畅感，链接下划线的优雅展开。
  **Animation**: 缓慢、柔和的淡入淡出，元素浮现时的轻微上移。
  **Typography System**: 标题使用优雅的衬线字体（如 Playfair Display 或 Merriweather），正文使用高可读性的衬线或无衬线字体（如 Lato），注重字间距和行距的微调。
</idea>
</text>
</response>

## 选择的设计方案

我选择 **Swiss Style (International Typographic Style)** 作为设计方案。

**理由**：
1. **专业性**：瑞士风格强调的清晰性和客观性非常适合学术主页，能够最有效地传达研究成果和个人信息。
2. **可读性**：严格的网格系统和排版规则确保了大量文本（如论文列表）的易读性。
3. **适应性**：这种风格既现代又经典，不会随时间过时，且易于维护和扩展。
4. **符合用户参考**：用户提供的参考网站（特别是Google Scholar）也倾向于这种清晰、结构化的展示方式。

**实施细节**：
- **布局**：左侧固定侧边栏放置个人头像、联系方式和导航；右侧为主内容区域，分为"关于我"、"研究方向"、"论文成果"等板块。
- **色彩**：背景色 `oklch(0.985 0 0)` (纯白/极淡灰)，文字色 `oklch(0.235 0.015 65)` (深灰)，强调色 `oklch(0.45 0.15 260)` (深蓝)。
- **字体**：Inter (无衬线) 用于整体界面，通过字重区分层级。
- **组件**：使用 shadcn/ui 的 Card 组件展示论文，使用 Separator 进行区域分隔。
