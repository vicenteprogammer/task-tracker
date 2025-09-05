async function registerTask(task){

    if(Object.keys(task).length === 0){
        return false
    }else{
        return true
    }
}

export default registerTask