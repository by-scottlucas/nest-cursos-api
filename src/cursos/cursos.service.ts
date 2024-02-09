import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create.curso.dto';
import { UpdatePatchCursoDTO } from './dto/update.patch.curso.dto';

@Injectable()
export class CursosService {

    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateCursoDto) {
        return this.prisma.cursos.create({ data })
    }

    async list() {
        return this.prisma.cursos.findMany();
    }

    async read(id: number) {

        await this.exists(id);

        return this.prisma.cursos.findUnique({
            where: { id }
        });

    }

    async update(id: number, data: CreateCursoDto) {

        await this.exists(id);

        return this.prisma.cursos.update({
            data,
            where: {
                id
            },
        });

    }

    async updatePartial(id: number, { title, description }: UpdatePatchCursoDTO) {

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

    async delete(id: number) {

        await this.exists(id);

        return this.prisma.cursos.delete({
            where: {
                id
            }
        });

    }

    async exists(id: number) {

        const idCount = await this.prisma.cursos.count({
            where: { id }
        })

        if (!idCount) {
            throw new NotFoundException(`O usuário com o ID ${id} não existe.`);
        }
    }
}
