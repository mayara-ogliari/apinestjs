import { Repository } from 'typeorm';
import { SaleProduct } from './saleproduct.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SaleProductRepository {
  constructor(
    @InjectRepository(SaleProduct)
    private saleProductRepository: Repository<SaleProduct>,
  ) {}

  async createSaleProduct(saleProduct: SaleProduct): Promise<SaleProduct> {
    return this.saleProductRepository.save(saleProduct);
  }
}
