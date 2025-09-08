import { tasks } from "../data/tasks.js"

async function registerTask(task) {

    if (Object.keys(task).length === 0 && Object.keys(task) < 5) {
        return false
    } else {
        let id = 1
        if (tasks.map((t) => t.id === id).length === 0) {
            task.id = id
            tasks.push(task)
            return true
        }else{
            id += 1
            task.id = id
            tasks.push(task)
            return true
        }
    }
}

export default registerTask