import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';

@Injectable()
export class UsersService {
   constructor(@InjectModel('Users') private readonly userModel: Model<Users>){}
   
   async createUser(user: Users): Promise<Users> {
      const newUser = new this.userModel(user);
      return await newUser.save();

   }
   
   async getAllUsers(): Promise<Users[]> {
      return await this.userModel.find();
   }
   
   async updateUser(id: string, user: Users): Promise<Users> {
      return await this.userModel.findByIdAndUpdate(id, user, { new: true });
   }
   
   async deleteUser(id: string): Promise<Users> {
      return await this.userModel.findByIdAndDelete(id);
   }

}
