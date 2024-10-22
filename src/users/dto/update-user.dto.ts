import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty } from "class-validator";

export class UpdateUserDto {

    @ApiProperty()
    @IsMongoId({ message: 'id không hợp lệ' })
    @IsNotEmpty({ message: 'id không được để trống' })
    _id: string

    @ApiProperty()
    name: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    address: string

    @ApiProperty()
    image: string
}
