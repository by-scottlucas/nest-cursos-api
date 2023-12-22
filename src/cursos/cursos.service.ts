import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso-dto';

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
                id
            }
        });

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
            throw new NotFoundException(`O usuário com o ${id} não existe.`);
        }
    }
}
