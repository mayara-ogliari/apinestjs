import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findByName(name: string): Promise<Product>;
}
