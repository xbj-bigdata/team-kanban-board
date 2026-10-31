# team-kanban-board

一个轻量级的**团队任务看板**应用，用于管理团队项目进度。支持创建任务卡片、拖拽卡片更新任务状态、删除任务，所有数据保存在浏览器 `localStorage` 中，无需后端与数据库。

本项目是《大数据采集与处理》课程「Git + Pull Request 团队协作」作业的交付成果。

---

## 一、技术栈

| 层次 | 选型 | 说明 |
| --- | --- | --- |
| 结构 | HTML5 | 语义化标签 |
| 样式 | CSS3 | Flexbox 布局，无 UI 框架 |
| 逻辑 | Vanilla JavaScript (ES6+) | 原生 JS，不引入任何框架 |
| 存储 | `localStorage` | 浏览器本地持久化，无后端、无数据库 |
| 版本控制 | Git + GitHub | Fork + Pull Request 协作工作流 |

---

## 二、功能特性

- ✅ 三列看板布局：待办（To Do）/ 进行中（In Progress）/ 已完成（Done）
- ✅ 创建新任务卡片
- ✅ 删除任务卡片
- ✅ 拖拽卡片在列之间移动，自动更新任务状态
- ✅ 刷新页面后数据不丢失（`localStorage` 持久化）

---

## 三、本地运行

无需安装依赖，直接用浏览器打开即可：

```bash
git clone https://github.com/<你的用户名>/team-kanban-board.git
cd team-kanban-board
```

然后双击 `index.html`，或在 VS Code 中安装 **Live Server** 插件后右键「Open with Live Server」。

> 推荐使用 Live Server。直接以 `file://` 协议打开时，个别浏览器的 `localStorage` 行为可能受限。

---

## 四、项目结构

```
team-kanban-board/
├── README.md      # 项目说明
├── index.html     # 页面结构：头部、新建任务表单、三列看板
├── style.css      # 样式：看板布局、任务卡片、拖拽反馈
└── app.js         # 逻辑：数据读写、渲染、增删、拖拽
```

---

## 五、团队协作工作流（Fork + PR）

本项目严格遵循以下流程，所有代码变更**必须**经过 Pull Request 与代码审查，任何人不得直接向 `main` 分支推送。

### 1. Fork 与克隆

在 GitHub 上 Fork 本仓库到自己账号，然后：

```bash
git clone https://github.com/<你的用户名>/team-kanban-board.git
cd team-kanban-board

# 添加上游仓库，用于同步最新代码
git remote add upstream https://github.com/xbj-bigdata/team-kanban-board.git
git remote -v
```

### 2. 开发前先同步，再建分支

```bash
git pull upstream main
git checkout -b feature/<功能名>
```

分支命名规范：`feature/ui-layout`、`feature/add-delete-task`、`feature/drag-drop` 等。

### 3. 提交与推送

```bash
git add .
git commit -m "feat: 简要描述本次变更"
git push origin feature/<功能名>
```

提交信息规范：

| 前缀 | 用途 |
| --- | --- |
| `feat:` | 新增功能 |
| `fix:` | 修复缺陷 |
| `refactor:` | 重构（不改变外部行为） |
| `docs:` | 文档变更 |
| `style:` | 格式调整（不影响逻辑） |

### 4. 创建 Pull Request

从自己的 `feature/xxx` 分支，向 `xbj-bigdata/team-kanban-board` 的 `main` 分支发起 PR。

PR 描述需包含：**变更内容与目的**、**如何测试或查看**、**效果截图**、**遗留问题（如有）**。

### 5. 代码审查与合并

- 除 PR 作者外，所有成员必须参与审查，评论需**具体到行**、保持专业与建设性
- 作者根据意见推送新提交，PR 会自动更新
- 获得批准后，由项目负责人使用 **Squash and merge** 合并，并**立即删除**该功能分支

### 6. 保持同步

```bash
git checkout main
git pull upstream main
git checkout feature/<你的功能>
git merge main
```

---

## 六、团队分工

| 角色 | GitHub 用户名 | 负责模块 |
| --- | --- | --- |
| 项目负责人 | `xbj-bigdata` | 建仓、分支保护、审查合并 PR、进度协调 |
| 前端开发者 A | | 看板 UI 布局与任务卡片展示 |
| 前端开发者 B | | 创建新任务、删除任务 |
| 前端开发者 C | | 拖拽任务卡片以更新状态 |
