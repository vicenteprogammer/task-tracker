import { Router } from "express";
import register from "../controller/tasks-controller.js";

const tasksRoutes = Router();

tasksRoutes.post('/register', register)

/*tasksRoutes.post('/register', (req, res)=>{
    res.s
})*/


export default tasksRoutes