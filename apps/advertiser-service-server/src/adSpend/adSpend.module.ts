import { Module } from "@nestjs/common";
import { AdSpendModuleBase } from "./base/adSpend.module.base";
import { AdSpendService } from "./adSpend.service";
import { AdSpendController } from "./adSpend.controller";
import { AdSpendResolver } from "./adSpend.resolver";

@Module({
  imports: [AdSpendModuleBase],
  controllers: [AdSpendController],
  providers: [AdSpendService, AdSpendResolver],
  exports: [AdSpendService],
})
export class AdSpendModule {}
