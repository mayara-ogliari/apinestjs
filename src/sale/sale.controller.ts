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
import * as qr from 'qrcode';
import { Sale } from './sale.entity';
import { LoggingInterceptor } from 'src/common/logging.interceptor';
import { SaleProduct } from './saleproduct.entity';

@Controller('sales')
@UseInterceptors(LoggingInterceptor)
export class SaleController {
  constructor(private saleService: SaleService, private saleRepository: Sale) {}

  @Post()
  async createSale(
    @Body('saleProduct') saleProductString: string,
    @Res() res: Response,
  ) {
    const saleProductsJson = JSON.parse(saleProductString).map(
      ({ productId, quantity }) => ({ product: { id: productId }, quantity }),
    );
    const sale = await this.saleService.createSale(
      this.saleRepository,
      saleProductsJson,
    );
    const qrCode = await qr.toBuffer(`sale/${sale.id}`, { type: 'png' });
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename=qr.png');
    return res.status(HttpStatus.OK).send(qrCode);
  }
}
