import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ParamId } from 'src/decorators/param-id-decorator';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso-dto';
import { UpdatePatchCursoDTO } from './dto/update-patch-curso-dto';
import { UpdatePutCursoDTO } from './dto/update-put-curso-dto';

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
    async listarCurso(@ParamId() id: number) {
        return this.cursosService.listarCurso(id);
    }

    @Put(':id')
    @ApiOkResponse({ description: 'Atualiza todos os campos de um curso.' })
    async atualizarCurso(@Body() data: UpdatePutCursoDTO, @ParamId() id: number) {
        return this.cursosService.atualizarCurso(id, data);
    }

    @Patch(':id')
    @ApiOkResponse({ description: 'Atualiza apenas os campos específicos de um curso.' })
    async atualizarCursoParcial(@Body() data: UpdatePatchCursoDTO, @ParamId() id: number) {
        return this.cursosService.atualizarParcial(id, data);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'Exclui um curso do sistema.' })
    async deleteCurso(@ParamId() id: number) {
        return this.cursosService.deletarCurso(id);
    }
}
