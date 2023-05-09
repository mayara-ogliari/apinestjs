import { User } from '../users/user.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
