import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'name ko được để trống' })
    name: string

    @ApiProperty()
    @IsNotEmpty({ message: 'pass ko được để trống' })
    password: string
}
