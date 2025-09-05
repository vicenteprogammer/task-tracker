import express, { json } from 'express';
import tasksRoutes from './routes/routes.js';

const app = express();
app.use(json())
app.use(tasksRoutes)

export default app