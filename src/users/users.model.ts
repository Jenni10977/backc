import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
    
@Prop()
  username: string;
  @Prop()
  password: string;
  @Prop()
  region: string;

}

export const UsersSchema = SchemaFactory.createForClass(Users);
//exportar la tabla de usuarios