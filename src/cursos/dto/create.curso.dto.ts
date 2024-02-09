import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCursoDto {

    @ApiProperty({ type: Number, description: 'ID do curso' })
    id: number;

    @ApiProperty({ type: String, description: 'Título do Curso' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ type: String, description: 'Descrição do Curso' })
    @IsString()
    @IsNotEmpty()
    description: string;
}