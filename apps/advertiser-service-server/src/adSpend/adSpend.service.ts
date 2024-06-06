import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdSpendServiceBase } from "./base/adSpend.service.base";

@Injectable()
export class AdSpendService extends AdSpendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
