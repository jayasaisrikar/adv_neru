import { Module } from "@nestjs/common";
import { AdLocationModuleBase } from "./base/adLocation.module.base";
import { AdLocationService } from "./adLocation.service";
import { AdLocationController } from "./adLocation.controller";
import { AdLocationResolver } from "./adLocation.resolver";

@Module({
  imports: [AdLocationModuleBase],
  controllers: [AdLocationController],
  providers: [AdLocationService, AdLocationResolver],
  exports: [AdLocationService],
})
export class AdLocationModule {}
