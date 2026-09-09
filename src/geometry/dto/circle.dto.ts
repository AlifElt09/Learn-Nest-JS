import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { Type } from "class-transformer";

export class CircleDto {
    @IsNotEmpty() // should be send
    @IsNumber() // should be a number
    @Type(() => Number) // convert data to number
    @Min(1) // mininal value is 1
    radius!: number
}