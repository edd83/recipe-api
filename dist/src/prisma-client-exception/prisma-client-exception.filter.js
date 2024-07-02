"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
const errorMappings = {
    P2000: { status: common_1.HttpStatus.BAD_REQUEST, message: "Input data is too long" },
    P2001: { status: common_1.HttpStatus.OK, message: "Recipe does not exists" },
    P2002: { status: common_1.HttpStatus.CONFLICT, message: "Recipe alreay exists" },
    P2025: { status: common_1.HttpStatus.OK, message: "Recipe does not exists" }
};
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter extends core_1.BaseExceptionFilter {
    cleanErrorMessage(message) {
        const msgCleared = message.split('})');
        return msgCleared[1];
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message.replace(/\n/g, '');
        if (exception instanceof client_1.Prisma.PrismaClientValidationError) {
            const status = common_1.HttpStatus.BAD_REQUEST;
            response
                .status(status)
                .json({
                statusCode: status,
                message: this.cleanErrorMessage(message)
            });
        }
        else {
            const error = errorMappings[exception.code];
            if (error) {
                response
                    .status(error.status)
                    .json(error);
            }
            else {
                super.catch(exception, host);
            }
        }
    }
};
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter = __decorate([
    (0, common_1.Catch)(Error)
], PrismaClientExceptionFilter);
//# sourceMappingURL=prisma-client-exception.filter.js.map