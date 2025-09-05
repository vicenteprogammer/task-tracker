import registerTask from "../services/register-task.js";
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

export default register