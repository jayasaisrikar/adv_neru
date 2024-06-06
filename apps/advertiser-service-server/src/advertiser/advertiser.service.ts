import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvertiserServiceBase } from "./base/advertiser.service.base";

@Injectable()
export class AdvertiserService extends AdvertiserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
