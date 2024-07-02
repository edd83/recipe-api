import { ArgumentsHost, Catch, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { Response } from "express";

const errorMappings: Record<string, { status: number; message: string }> = {
  P2000: { status: HttpStatus.BAD_REQUEST, message: "Input data is too long"},
  P2001: { status: HttpStatus.OK, message: "Recipe does not exists"},
  P2002: { status: HttpStatus.CONFLICT, message: "Recipe alreay exists"},
  P2025: { status: HttpStatus.OK, message: "Recipe does not exists"}
}

@Catch(Error)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  cleanErrorMessage(message: string) {
    const msgCleared = message.split('})');
    return msgCleared[1];
  }

  catch(exception: Prisma.PrismaClientKnownRequestError|Prisma.PrismaClientValidationError|any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    if (exception instanceof Prisma.PrismaClientValidationError) {
      const status = HttpStatus.BAD_REQUEST;
      response
        .status(status)
        .json({
          statusCode: status,
          message: this.cleanErrorMessage(message)
        });
    } else {
      const error = errorMappings[exception.code];
      if (error) {
        response
          .status(error.status)
          .json(error);
      } else {
        super.catch(exception, host);
      }
    }
  }
}