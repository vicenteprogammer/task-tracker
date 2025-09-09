import { tasks } from "../data/tasks.js";

async function deleteTasks(task) {
    let taskIndex = tasks.findIndex((t)=> t.id = task.id)
    tasks.splice(taskIndex, 1);
}

export default deleteTasks