import { Repository } from 'typeorm';
import { SaleProduct } from './saleproduct.entity';
export declare class SaleProductRepository {
    private saleProductRepository;
    constructor(saleProductRepository: Repository<SaleProduct>);
    createSaleProduct(saleProduct: SaleProduct): Promise<SaleProduct>;
}
