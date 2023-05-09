import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './sale.entity';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { ProductModule } from './../product/product.module';
import { ProductService } from './../product/product.service';
import { Product } from './../product/product.entity';
import { SaleProduct } from './saleproduct.entity';
import { SaleProductRepository } from './saleproduct.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([Sale, Product, SaleProduct]),
    ProductModule,
  ],
  providers: [SaleService, ProductService, Sale, SaleProductRepository],
  controllers: [SaleController],
  exports: [SaleService, TypeOrmModule],
})
export class SaleModule {}
