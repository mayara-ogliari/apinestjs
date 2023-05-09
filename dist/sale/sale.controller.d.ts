import { Response } from 'express';
import { SaleService } from './sale.service';
import { Sale } from './sale.entity';
export declare class SaleController {
    private saleService;
    private saleRepository;
    constructor(saleService: SaleService, saleRepository: Sale);
    createSale(saleProductString: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
