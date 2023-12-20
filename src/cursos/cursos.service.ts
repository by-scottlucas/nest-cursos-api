import { HttpException, Injectable } from '@nestjs/common';
import { CURSOS } from './cursos.mock';

@Injectable()
export class CursosService {

    cursos = CURSOS;

    getCursos(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.cursos);
        })
    }

    getCurso(cursoId): Promise<any> {
        let id = Number(cursoId);
        return new Promise(resolve => {
            const curso = this.cursos.find(curso => curso.id === id)

            if (!curso) {
                throw new HttpException('O curso com esse ID não existe!', 404);
            }

            resolve(curso);
        })
    }

    addCurso(curso): Promise<any> {
        return new Promise(resolve => {
            this.cursos.push(curso);
            resolve(this.cursos);
        })
    }

    deleteCurso(cursoId): Promise<any> {

        let id = Number(cursoId);

        return new Promise(resolve => {
            let index = this.cursos.findIndex(curso => curso.id === id);

            if (index === -1) {
                throw new HttpException('O curso com este ID não existe', 404);
            }
            this.cursos.splice(index, 1);
            resolve(this.cursos);
        })
    }
}
