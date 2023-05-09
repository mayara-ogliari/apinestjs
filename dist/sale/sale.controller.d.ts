import { Response } from 'express';
import { SaleService } from './sale.service';
import { Product } from '../product/product.entity';
import { ProductService } from '../product/product.service';
import { Sale } from './sale.entity';
export declare class SaleController {
    private saleService;
    private productService;
    private saleRepository;
    constructor(saleService: SaleService, productService: ProductService, saleRepository: Sale);
    createSale(products: Product, res: Response): Promise<Response<any, Record<string, any>>>;
}
