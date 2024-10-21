import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;
@Schema({ timestamps: true })
export class User {

    @ApiProperty()
    @Prop()
    name: string;

    @ApiProperty()
    @Prop()
    email: string;

    @ApiProperty()
    @Prop()
    password: string;

    @ApiProperty()
    @Prop()
    phone: string;

    @ApiProperty()
    @Prop()
    address: string;

    @ApiProperty()
    @Prop()
    image: string;

    @ApiProperty()
    @Prop({ default: 'USERS' })
    role: string;

    @ApiProperty()
    @Prop({ default: 'LOCAL' })
    accountType: string;

    @ApiProperty()
    @Prop({ default: false })
    isActive: boolean;

    @ApiProperty()
    @Prop()
    codeId: string;

    @ApiProperty()
    @Prop()
    codeExpired: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
