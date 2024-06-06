import { Module } from "@nestjs/common";
import { AdvertiserModuleBase } from "./base/advertiser.module.base";
import { AdvertiserService } from "./advertiser.service";
import { AdvertiserController } from "./advertiser.controller";
import { AdvertiserResolver } from "./advertiser.resolver";

@Module({
  imports: [AdvertiserModuleBase],
  controllers: [AdvertiserController],
  providers: [AdvertiserService, AdvertiserResolver],
  exports: [AdvertiserService],
})
export class AdvertiserModule {}
