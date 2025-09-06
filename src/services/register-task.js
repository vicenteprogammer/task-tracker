import { tasks } from "../data/tasks.js"

async function registerTask(task){

    if(Object.keys(task).length === 0 && Object.keys(task) < 5 ){
        return false
    }else{
        tasks.push(task)
        return true
    }
}

export default registerTask