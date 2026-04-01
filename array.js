const tasks = [
  { id: 1, title: "Завтрак", duration: 1, priority: 2 },
  { id: 2, title: "Учёба", duration: 4, priority: 5 },
  { id: 3, title: "Прогулка", duration: 2, priority: 3 },
  { id: 4, title: "Игры", duration: 3, priority: 1 },
  { id: 5, title: "Работа", duration: 6, priority: 5 },
];
const selectedIds = [1, 2, 3, 5];

function getSelectedIds(tasks, selectedIds) {
  return tasks.filter(function (item) {
    return selectedIds.includes(item.id);
  });
}
console.log("Задачи, соответствующие выбранным в selectedIds задачам:");
console.log("[");
getSelectedIds(tasks, selectedIds).forEach((item) =>
  console.log(
    `  { id: ${item.id}, title: "${item.title}", priority: ${item.priority} },`,
  ),
);
console.log("]");
function getAllDuration(tasks) {
  return tasks.reduce(function (sum, item) {
    return sum + item.duration;
  }, 0);
}
console.log(
  "Суммарная длительность всех выбранных задач: " +
    getAllDuration(getSelectedIds(tasks, selectedIds)),
);

function getSortedByPriority(sortedTask) {
  return sortedTask.sort((a, b) => {
    return b.priority - a.priority;
  });
}

console.log("Выбранные задачи по убыванию приоритета:");
console.log("[");
getSortedByPriority(getSelectedIds(tasks, selectedIds)).forEach((item) =>
  console.log(`  { title: "${item.title}", priority: ${item.priority} },`),
);
console.log("]");

function getTasksByPriority(tasks) {
  return tasks.filter((a) => a.priority >= 4);
}

console.log("Задачи с высоким приоритетом:");
console.log("[");
getTasksByPriority(getSelectedIds(tasks, selectedIds)).forEach((item) =>
  console.log(`  { title: "${item.title}", priority: ${item.priority} },`),
);
console.log("]");
function isAcceptable(tasks) {
  return getAllDuration(tasks) < 12 ? "Допустимо" : " Перегружено";
}

console.log(
  "Статус расписания: " + isAcceptable(getSelectedIds(tasks, selectedIds)),
);
