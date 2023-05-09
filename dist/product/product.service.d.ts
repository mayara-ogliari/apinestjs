import { Product } from './product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    updateQuantity(product: Product, quantity: number): Promise<Product>;
    findByName(name: string): Promise<Product>;
}
