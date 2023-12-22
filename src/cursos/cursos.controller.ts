import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso-dto';

@Controller('api/v1/cursos/')
export class CursosController {
    constructor(private cursosService: CursosService) { }

    @Post()
    @ApiCreatedResponse({ description: 'Adiciona um curso ao sistema.' })
    async addcurso(@Body() data: CreateCursoDto) {
        return this.cursosService.addCurso(data);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista todos os cursos registrados no sistema.' })
    async listarCursos() {
        return this.cursosService.listarCursos();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Lista um curso específico.' })
    async listarCurso(@Param() id: number) {
        return this.cursosService.listarCurso(id);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'Exclui um curso do sistema.' })
    async deleteCurso(@Param() id: number) {
        return this.cursosService.deletarCurso(id);
    }
}
