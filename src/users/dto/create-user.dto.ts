import { MinLength, IsInt } from "class-validator";

export class CreateUserDto {
    id: number;
    @MinLength(5)
    name: string;
    // @MinLength(5)
    @IsInt()
    salary: number;
    type: string;
}
