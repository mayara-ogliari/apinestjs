import { Sale } from './sale.entity';
import { Product } from '../product/product.entity';
export declare class SaleProduct {
    saleId: number;
    quantity: number;
    sale: Sale;
    product: Product;
}
