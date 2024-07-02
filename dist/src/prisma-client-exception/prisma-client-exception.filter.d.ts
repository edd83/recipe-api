import { ArgumentsHost } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
export declare class PrismaClientExceptionFilter extends BaseExceptionFilter {
    cleanErrorMessage(message: string): string;
    catch(exception: Prisma.PrismaClientKnownRequestError | Prisma.PrismaClientValidationError | any, host: ArgumentsHost): void;
}
