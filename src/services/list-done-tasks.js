async function listDone(tasks) {
    if(tasks.length === 0){
        return 'Not tasks in list';
    }else{
        let tasksDone = tasks.filter((t)=> t.done === true)
        if(tasksDone.length === 0){
            return 'Not tasks done in list'
        }else{
            return tasksDone
        }
    }
}

export default listDone