import { ApiProperty } from "@nestjs/swagger";

export class Auth {

    @ApiProperty()
    name: string
    @ApiProperty()
    pass: string
}
