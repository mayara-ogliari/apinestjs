"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./configs/typeorm.config");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const product_module_1 = require("./product/product.module");
const auth_middleware_1 = require("./middleware/auth.middleware");
const users_controller_1 = require("./users/users.controller");
const auth_controller_1 = require("./auth/auth.controller");
const auth_service_1 = require("./auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const sale_module_1 = require("./sale/sale.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude({
            path: '/auth/login',
            method: common_1.RequestMethod.POST,
        }, {
            path: '/users',
            method: common_1.RequestMethod.POST,
        })
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            sale_module_1.SaleModule,
        ],
        controllers: [users_controller_1.UsersController, auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_1.JwtService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map