import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdLocationServiceBase } from "./base/adLocation.service.base";

@Injectable()
export class AdLocationService extends AdLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
