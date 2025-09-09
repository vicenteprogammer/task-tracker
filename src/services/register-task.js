import { tasks } from "../data/tasks.js"

async function registerTask(task) {

    if (Object.keys(task).length === 0 && Object.keys(task) < 5) {
        return false
    } else {
        task.id = 1
        let id = 1;
        let next = tasks.map((t) => t.id === id);
        if (next.length >  0) {
            id += next.length
            task.id = id
            tasks.push(task)
            return true 
        }else{
            tasks.push(task)
            return true
        }
        
    }
}

export default registerTask