import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { Product } from '../product/product.entity';
export declare class SaleService {
    private saleRepository;
    constructor(saleRepository: Repository<Sale>);
    createSale(sale: Sale, products: Product[]): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findById(id: number): Promise<Sale>;
    generateQRCode(saleId: number): Promise<string>;
}
