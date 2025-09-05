import { Router } from "express";

const tasksRoutes = Router();

tasksRoutes.post('/register', registerTask())