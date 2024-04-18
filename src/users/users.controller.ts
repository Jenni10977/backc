import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService){

    }
    @Post('/crear')
    async createUser(@Body() user: Users){
        return this.usersService.createUser(user);
    }
    @Get('/obtener')
    async getAllUsers(){
        return this.usersService.getAllUsers();
    }
    @Put('/actualizar/:id')
    async updateUser(@Param('id') id: string, @Body() user: Users){
        return this.usersService.updateUser(id, user);
    }
    @Delete('/eliminar/:id')
    async deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(id);
    }
}
