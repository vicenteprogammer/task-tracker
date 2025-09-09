import { tasks } from '../data/tasks.js'
async function updateStats(taskUp) {
   let upTask = tasks.filter((t)=> t.id === taskUp.id)
   upTask[0].done = true
}

export default updateStats