import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { Product } from '../product/product.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}

  async createSale(sale: Sale, products: Product[]): Promise<Sale> {
    sale.products = products;
    sale.date = new Date();
    return this.saleRepository.save(sale);
  }

  async findAll(): Promise<Sale[]> {
    return this.saleRepository.find({ relations: ['products'] });
  }

  async findById(id: number): Promise<Sale> {
    return this.saleRepository.findOne({
      where: { id },
      relations: ['products'],
    });
  }

  async generateQRCode(saleId: number): Promise<string> {
    const sale = await this.findById(saleId);
    const products = sale.products.map((p) => p.name).join(',');
    return `${sale.id}-${products}`;
  }
}
