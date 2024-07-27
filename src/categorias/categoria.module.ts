import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './../produto/service/produto.service';
import { ProdutoModule } from './../produto/produto.module';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './services/categoria.service';
import { CategoriaController } from './controller/categoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), ProdutoModule],

  providers: [CategoriaService, ProdutoService],
  controllers: [CategoriaController],
  exports: [TypeOrmModule],
})
export class CategoriaModule {}
