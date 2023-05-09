import { Product } from '../product/product.entity';
export declare class Sale {
    id: number;
    date: Date;
    products: Product[];
    createdAt: Date;
    updatedAt: Date;
}
