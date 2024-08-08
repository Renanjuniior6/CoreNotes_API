import { Router } from "express";
import { TasksController } from "../controllers/tasks.controller";
import { validator } from "../middlewares/validator.middleware";
import { createTaskSchema } from "../dtos/tasks.dto";
import { TasksFactory } from "../factories/task.factory";

export const tasksRoutes = Router()

const controller = new TasksController(TasksFactory.getServiceInstance())

tasksRoutes.get('/', controller.index)

tasksRoutes.post('/', validator({
    schema: createTaskSchema
}), controller.create)