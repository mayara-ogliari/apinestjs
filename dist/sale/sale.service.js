"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sale_entity_1 = require("./sale.entity");
const saleproduct_entity_1 = require("./saleproduct.entity");
let SaleService = class SaleService {
    constructor(saleRepository, saleProductRepository) {
        this.saleRepository = saleRepository;
        this.saleProductRepository = saleProductRepository;
    }
    async createSale(sale, saleProducts) {
        const date = new Date();
        if (!sale.products) {
            sale.products = [];
        }
        saleProducts.forEach((saleProduct) => {
            const newSaleProduct = new saleproduct_entity_1.SaleProduct();
            newSaleProduct.product = saleProduct.product;
            newSaleProduct.quantity = saleProduct.quantity;
            sale.products.push(newSaleProduct);
        });
        sale.date = date;
        return this.saleRepository.save(sale);
    }
};
SaleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sale_entity_1.Sale)),
    __param(1, (0, typeorm_1.InjectRepository)(saleproduct_entity_1.SaleProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SaleService);
exports.SaleService = SaleService;
//# sourceMappingURL=sale.service.js.map