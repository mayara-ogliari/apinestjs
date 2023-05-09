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
exports.SaleController = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const product_entity_1 = require("../product/product.entity");
const product_service_1 = require("../product/product.service");
const qr = require("qrcode");
const sale_entity_1 = require("./sale.entity");
const logging_interceptor_1 = require("../common/logging.interceptor");
let SaleController = class SaleController {
    constructor(saleService, productService, saleRepository) {
        this.saleService = saleService;
        this.productService = productService;
        this.saleRepository = saleRepository;
    }
    async createSale(products, res) {
        const sale = await this.saleService.createSale(this.saleRepository, [
            products,
        ]);
        const qrCode = await qr.toBuffer(`sale/${sale.id}`, { type: 'png' });
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', 'attachment; filename=qr.png');
        return res.status(common_1.HttpStatus.OK).send(qrCode);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product, Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "createSale", null);
SaleController = __decorate([
    (0, common_1.Controller)('sales'),
    (0, common_1.UseInterceptors)(logging_interceptor_1.LoggingInterceptor),
    __metadata("design:paramtypes", [sale_service_1.SaleService,
        product_service_1.ProductService,
        sale_entity_1.Sale])
], SaleController);
exports.SaleController = SaleController;
//# sourceMappingURL=sale.controller.js.map