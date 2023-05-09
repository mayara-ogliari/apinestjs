import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { SaleProduct } from './saleproduct.entity';
export declare class SaleService {
    private saleRepository;
    private saleProductRepository;
    constructor(saleRepository: Repository<Sale>, saleProductRepository: Repository<SaleProduct>);
    createSale(sale: any, saleProducts: SaleProduct[]): Promise<Sale>;
}
