import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './sale.entity';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { ProductModule } from './../product/product.module';
import { ProductService } from './../product/product.service';
import { Product } from './../product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, Product]), ProductModule],
  providers: [SaleService, ProductService, Sale],
  controllers: [SaleController],
  exports: [SaleService, TypeOrmModule],
})
export class SaleModule {}
