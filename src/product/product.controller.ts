import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { LoggingInterceptor } from 'src/common/logging.interceptor';

@Controller('products')
@UseInterceptors(LoggingInterceptor)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Get()
  async findAll(@Query('name') name?: string) {
    if (name) {
      return this.productService.findByName(name);
    }
    return this.productService.findAll();
  }
}
