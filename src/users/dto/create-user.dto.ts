import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    image: string;

}
