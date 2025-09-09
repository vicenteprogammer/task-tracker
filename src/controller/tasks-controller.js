import { tasks } from "../data/tasks.js";
import listDone from "../services/list-done-tasks.js";
import registerTask from "../services/register-task.js";
import updateStats from "../services/update-stats-task.js";
async function register(req, res){
    const task = req.body;
    console.log(task)
    const response = await registerTask(task);
    if(response){
        return res.status(200).send('Task add Sucessful')
    }else{
        return res.status(400).send('Task not add')
    }


}

async function listAll(req, res){
    if(tasks.length === 0){
        return res.status(200).send('Not tasks in list')
    }else{
        return res.status(200).send(tasks)
    }
}

async function listDoneTasks(req, res){
    if(tasks.length === 0){
        return res.status(200).send('Not tasks in list')
    }else{
        let response = await listDone(tasks);
        return res.send(response)
    }
}

async function update(req, res) {
    let task = req.body;
    if(tasks.length === 0){
        return res.status(200).send('Not tasks in list')
    }else{
        let response = await updateStats(task);
        return res.send("Task update sucessful")
    }
}



export default{
    register,
    listAll,
    listDoneTasks,
    update
}