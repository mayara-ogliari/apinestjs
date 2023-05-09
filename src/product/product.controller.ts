import {
  Controller,
  Get,
  Param,
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
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    console.log(name);
    return this.productService.findByName(name);
  }
}
