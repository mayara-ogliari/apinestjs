import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { SaleService } from './sale.service';
import { Product } from '../product/product.entity';
import { ProductService } from '../product/product.service';
import * as qr from 'qrcode';
import { Sale } from './sale.entity';
import { LoggingInterceptor } from 'src/common/logging.interceptor';

@Controller('sales')
@UseInterceptors(LoggingInterceptor)
export class SaleController {
  constructor(
    private saleService: SaleService,
    private productService: ProductService,
    private saleRepository: Sale,
  ) {}

  @Post()
  async createSale(@Body() products: Product, @Res() res: Response) {
    const sale = await this.saleService.createSale(this.saleRepository, [
      products,
    ]);
    const qrCode = await qr.toBuffer(`sale/${sale.id}`, { type: 'png' });
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename=qr.png');
    return res.status(HttpStatus.OK).send(qrCode);
  }
}
