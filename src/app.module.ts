import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TasksModule , UsersModule, MongooseModule.forRoot('mongodb+srv://Administrador:JszVETR06Thv7Ird@cluster0.9s9w6bi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  
})
export class AppModule {}
