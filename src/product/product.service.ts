import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id: id } });
  }

  async updateQuantity(product: Product, quantity: number): Promise<Product> {
    product.quantity += quantity;
    return this.productRepository.save(product);
  }

  async findByName(name: string): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        name: name,
      },
    });
  }
}
