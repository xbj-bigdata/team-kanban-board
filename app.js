/* ============================================================
 * team-kanban-board · app.js
 *
 * 项目负责人已搭好：数据层（localStorage 读写）+ 初始化入口
 * 三个功能模块留给前端开发者 A / B / C 各自认领实现，
 * 每个 TODO 块互不影响，可并行开发、互不冲突。
 * ============================================================ */

'use strict';

/* ------------------------------------------------------------
 * 数据层（负责人已完成，无需修改）
 * ---------------------------------------------------------- */

const STORAGE_KEY = 'team-kanban-board:tasks';

/** 看板三列的状态标识，与 index.html 中 data-status 一一对应 */
const STATUSES = ['todo', 'doing', 'done'];

/** 全局任务列表，元素结构：{ id: string, title: string, status: string } */
let tasks = [];

/**
 * 从 localStorage 读取任务列表
 * @returns {Array<{id:string,title:string,status:string}>}
 */
function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('[kanban] 读取本地数据失败，已重置为空列表：', err);
    return [];
  }
}

/**
 * 将当前任务列表写入 localStorage
 */
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    console.error('[kanban] 写入本地数据失败：', err);
  }
}

/**
 * 生成任务唯一 ID
 * @returns {string}
 */
function createId() {
  return 'task-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

/* ------------------------------------------------------------
 * 【前端开发者 A】看板 UI 布局与任务卡片展示
 *
 * 任务：
 *   1. 在 renderBoard() 中，先清空三列的任务列表容器（id 分别为
 *      list-todo / list-doing / list-done）。
 *   2. 遍历 tasks，按 task.status 把卡片放进对应列。
 *   3. 每张卡片结构参考：
 *        <li class="task-card" draggable="true" data-id="任务ID">
 *          <span class="task-text">任务标题</span>
 *          <button class="task-delete" title="删除任务">×</button>
 *        </li>
 *   4. 更新每列右上角的计数（span[data-count-for="todo|doing|done"]）。
 *   5. 某列为空时，往该列插入 <li class="empty-hint">暂无任务</li>。
 *
 * 提示：卡片需要 draggable="true" 并带上 data-id，
 *       否则【开发者 C】的拖拽功能拿不到任务信息。
 * ---------------------------------------------------------- */

function renderBoard() {
  // TODO: 由前端开发者 A 实现
  console.warn('[kanban] renderBoard() 尚未实现（前端开发者 A 负责）');
}

/* ------------------------------------------------------------
 * 【前端开发者 B】创建新任务 / 删除任务
 *
 * 任务：
 *   1. addTask(title)：
 *      - 去除首尾空格，为空则直接 return
 *      - 构造新任务对象 { id: createId(), title, status: 'todo' }
 *      - push 进 tasks，调用 saveTasks() 持久化
 *      - 调用 renderBoard() 刷新界面
 *   2. deleteTask(id)：
 *      - 从 tasks 中过滤掉对应 id 的任务
 *      - 调用 saveTasks() 与 renderBoard()
 *   3. 在 initNewTaskForm() 中给 #new-task-form 绑定 submit 事件：
 *      - event.preventDefault() 阻止页面刷新
 *      - 读取 #new-task-input 的值，调用 addTask()
 *      - 清空输入框
 *   4. 删除按钮建议用事件委托绑定在 .board 上（卡片是动态生成的）。
 * ---------------------------------------------------------- */

/**
 * 新增任务
 * @param {string} title 任务标题
 */
function addTask(title) {
  // TODO: 由前端开发者 B 实现
  console.warn('[kanban] addTask() 尚未实现（前端开发者 B 负责）', title);
}

/**
 * 删除任务
 * @param {string} id 任务 ID
 */
function deleteTask(id) {
  // TODO: 由前端开发者 B 实现
  console.warn('[kanban] deleteTask() 尚未实现（前端开发者 B 负责）', id);
}

/**
 * 初始化「新建任务」表单
 */
function initNewTaskForm() {
  // TODO: 由前端开发者 B 实现
  console.warn('[kanban] initNewTaskForm() 尚未实现（前端开发者 B 负责）');
}

/* ------------------------------------------------------------
 * 【前端开发者 C】拖拽任务卡片以更新状态
 *
 * 任务：
 *   1. 给每张 .task-card 绑定 dragstart：
 *      - 把任务 id 存入 dataTransfer（e.dataTransfer.setData('text/plain', id)）
 *      - 给卡片加上 .dragging 类做视觉反馈
 *   2. 绑定 dragend：移除 .dragging 类
 *   3. 给每个 .task-list 绑定 dragover：
 *      - event.preventDefault()（必须，否则无法放置）
 *      - 给该列加上 .drag-over 类
 *   4. 绑定 dragleave：移除 .drag-over 类
 *   5. 绑定 drop：
 *      - event.preventDefault()
 *      - 取出 id，找到对应任务，把 status 改成该列的 data-status
 *      - saveTasks() + renderBoard()
 *
 * 提示：卡片是动态生成的，建议用事件委托，
 *       或在 renderBoard() 之后重新绑定。
 * ---------------------------------------------------------- */

function initDragAndDrop() {
  // TODO: 由前端开发者 C 实现
  console.warn('[kanban] initDragAndDrop() 尚未实现（前端开发者 C 负责）');
}

/* ------------------------------------------------------------
 * 应用入口（负责人已完成，无需修改）
 * ---------------------------------------------------------- */

function init() {
  tasks = loadTasks();

  initNewTaskForm();   // 开发者 B
  initDragAndDrop();   // 开发者 C
  renderBoard();       // 开发者 A
}

document.addEventListener('DOMContentLoaded', init);
