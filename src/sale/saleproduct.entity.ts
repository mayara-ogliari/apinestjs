import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Sale } from './sale.entity';
import { Product } from '../product/product.entity';

@Entity()
export class SaleProduct {
  @PrimaryColumn()
  saleId: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Sale, (sale) => sale.products)
  sale: Sale;

  @ManyToOne(() => Product)
  product: Product;
}
