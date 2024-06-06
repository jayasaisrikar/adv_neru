import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessCryptoServiceBase } from "./base/businessCrypto.service.base";

@Injectable()
export class BusinessCryptoService extends BusinessCryptoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
