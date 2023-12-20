import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CursosModule } from './cursos/cursos.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';


@Module({
  imports: [CursosModule , CursoModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}