import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateCursoDto } from './create-curso-dto';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
    constructor(private cursosService: CursosService){}

    @Get()
    @ApiOkResponse({description: 'Lista todos os Cursos.'})
    async getCursos(){
        const cursos = await this.cursosService.getCursos();
        return cursos;
    }

    @Get(':cursoId')
    @ApiOkResponse({description: 'Lista um Curso.'})
    async getCurso(@Param('cursoId') cursoId){
        const curso = await this.cursosService.getCurso(cursoId);
        return curso;
    }

    @Post()
    @ApiCreatedResponse({description: 'Adiciona um Cursos.'})
    async addcurso(@Body() createCursoDto: CreateCursoDto){
        const curso = await this.cursosService.addCurso(createCursoDto);
        return curso;
    }

    @Delete()
    @ApiOkResponse({description: 'Adiciona um Cursos.'})
    async deleteCurso(@Query() query){
        const cursos = await this.cursosService.deleteCurso(query.cursoId);
        return cursos;
    }
}
