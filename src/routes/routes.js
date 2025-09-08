import { Router } from "express";
import controller from "../controller/tasks-controller.js";

const tasksRoutes = Router();

tasksRoutes.post('/register',controller.register)
tasksRoutes.get('/listAll', controller.listAll)
tasksRoutes.get('/listdone', controller.listDoneTasks)
tasksRoutes.put('/updateStatsTask', controller.update)
/*tasksRoutes.post('/register', (req, res)=>{
    res.s
})*/


export default tasksRoutes