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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleProduct = void 0;
const typeorm_1 = require("typeorm");
const sale_entity_1 = require("./sale.entity");
const product_entity_1 = require("../product/product.entity");
let SaleProduct = class SaleProduct {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], SaleProduct.prototype, "saleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SaleProduct.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sale_entity_1.Sale, (sale) => sale.products),
    __metadata("design:type", sale_entity_1.Sale)
], SaleProduct.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product),
    __metadata("design:type", product_entity_1.Product)
], SaleProduct.prototype, "product", void 0);
SaleProduct = __decorate([
    (0, typeorm_1.Entity)()
], SaleProduct);
exports.SaleProduct = SaleProduct;
//# sourceMappingURL=saleproduct.entity.js.map