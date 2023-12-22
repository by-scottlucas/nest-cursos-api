import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso-dto';
import { UpdatePatchCursoDTO } from './dto/update-patch-curso-dto';
import { UpdatePutCursoDTO } from './dto/update-put-curso-dto';

@Injectable()
export class CursosService {

    constructor(private readonly prisma: PrismaService) { }

    async addCurso({ title, description }: CreateCursoDto) {
        return this.prisma.cursos.create(
            { data: { title, description } }
        )
    }

    async listarCursos() {
        return this.prisma.cursos.findMany();
    }

    async listarCurso(id: number) {

        await this.exists(id);

        return this.prisma.cursos.findUnique({
            where: {
                id,
            }
        });

    }

    async atualizarCurso(id: number, { title, description }: UpdatePutCursoDTO) {

        await this.exists(id);

        return this.prisma.cursos.update({
            data: { title, description },
            where: { id },
        });

    }

    async atualizarParcial(id: number, { title, description }: UpdatePatchCursoDTO) {

        await this.exists(id);
        const data: any = {};

        if (title) {
            data.title = title;
        }

        if (description) {
            data.description = description;
        }

        return this.prisma.cursos.update({
            data,
            where: {
                id
            },
        })

    }

    async deletarCurso(id: number) {

        await this.exists(id);

        return this.prisma.cursos.delete({
            where: {
                id
            }
        });

    }

    async exists(id: number) {

        if (!(await this.prisma.cursos.count({
            where: {
                id
            }
        }))) {
            throw new NotFoundException(`O usuário com o ID ${id} não existe.`);
        }
    }
}
