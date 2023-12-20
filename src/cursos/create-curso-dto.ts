import { ApiProperty } from "@nestjs/swagger";

export class CreateCursoDto {
    @ApiProperty({type: Number, description: 'ID'})
    readonly id: number;

    @ApiProperty({type: String, description: 'Título do Curso'})
    readonly tittle: string;

    @ApiProperty({type: String, description: 'Descrição do Curso'})
    readonly description: string;
}