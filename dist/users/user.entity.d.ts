import { BaseEntity } from 'typeorm';
import { Product } from '../product/product.entity';
export declare class User extends BaseEntity {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[];
    checkPassword(password: string): Promise<boolean>;
}
