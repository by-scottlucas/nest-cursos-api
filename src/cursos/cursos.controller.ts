import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ParamId } from 'src/decorators/param-id-decorator';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create.curso.dto';
import { UpdatePatchCursoDTO } from './dto/update.patch.curso.dto';

@Controller('api/v1/cursos')
export class CursosController {

    constructor(private cursosService: CursosService) { }

    @Post()
    @ApiCreatedResponse({ description: 'Adiciona um curso' })
    async addcurso(@Body() data: CreateCursoDto) {
        return this.cursosService.create(data);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista todos os cursos' })
    async listarCursos() {
        return this.cursosService.list();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Lista um curso' })
    async listarCurso(@ParamId() id: number) {
        return this.cursosService.read(id);
    }

    @Put(':id')
    @ApiOkResponse({ description: 'Atualiza os dados de um curso' })
    async atualizarCurso(@ParamId() id: number, @Body() data: CreateCursoDto) {
        return this.cursosService.update(id, data);
    }

    @Patch(':id')
    @ApiOkResponse({ description: 'Atualiza parcialmente os dados de um curso' })
    async atualizarCursoParcial(@ParamId() id: number, @Body() data: UpdatePatchCursoDTO) {
        return this.cursosService.updatePartial(id, data);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'Exclui um curso' })
    async deleteCurso(@ParamId() id: number) {
        return this.cursosService.delete(id);
    }
}
