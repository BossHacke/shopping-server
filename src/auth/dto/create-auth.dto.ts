import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'name ko được để trống' })
    email: string

    @ApiProperty()
    @IsNotEmpty({ message: 'pass ko được để trống' })
    password: string

    @ApiProperty()
    name: string
}
