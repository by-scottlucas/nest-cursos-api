import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

@Module({
  controllers: [CursosController],
  providers: [CursosService],
  imports: [PrismaModule]
})
export class CursosModule {}
