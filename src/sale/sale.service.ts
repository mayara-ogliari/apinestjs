import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { SaleProduct } from './saleproduct.entity';
@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale) private saleRepository: Repository<Sale>,
    @InjectRepository(SaleProduct)
    private saleProductRepository: Repository<SaleProduct>,
  ) {}

  async createSale(sale, saleProducts: SaleProduct[]): Promise<Sale> {
    const date = new Date();
    if (!sale.products) {
      sale.products = [];
    }
    saleProducts.forEach((saleProduct) => {
      const newSaleProduct = new SaleProduct();
      newSaleProduct.product = saleProduct.product;
      newSaleProduct.quantity = saleProduct.quantity;
      sale.products.push(newSaleProduct);
    });
    sale.date = date;
    return this.saleRepository.save(sale);
  }
}
