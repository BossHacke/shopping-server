import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty({description: 'password'})
    @IsNotEmpty()
    password: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    image: string;
}
