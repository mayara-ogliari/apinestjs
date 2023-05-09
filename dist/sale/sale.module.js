"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sale_entity_1 = require("./sale.entity");
const sale_service_1 = require("./sale.service");
const sale_controller_1 = require("./sale.controller");
const product_module_1 = require("./../product/product.module");
const product_service_1 = require("./../product/product.service");
const product_entity_1 = require("./../product/product.entity");
let SaleModule = class SaleModule {
};
SaleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sale_entity_1.Sale, product_entity_1.Product]), product_module_1.ProductModule],
        providers: [sale_service_1.SaleService, product_service_1.ProductService, sale_entity_1.Sale],
        controllers: [sale_controller_1.SaleController],
        exports: [sale_service_1.SaleService, typeorm_1.TypeOrmModule],
    })
], SaleModule);
exports.SaleModule = SaleModule;
//# sourceMappingURL=sale.module.js.map