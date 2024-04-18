import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TaskController {

    constructor(private tasksService:TasksService){}

    @Get('/tasks')
    getAllTasks(){
       return this.tasksService.getTasks(); 
       // return this.tasksService.testing(); 
    }
    @Post('/tasks')
    createTask(){
       return 'Creando tareas' 
    }
    @Put('/tasks') // {title: 'Primear tareas', status: false} -> {title: 'tarea', status: true]
    updateTask(){
       return 'Actualizando tareas' 
    }
    @Delete('/tasks')
    deleteTask(){
       return 'Eliminando tareas' 
    }

    @Patch('/tasks') // {title: 'Primear tareas', status: false} => { status: true}
    updateTaskStatus(){
        return 'Actualizando el status de una tarea'
    }
}