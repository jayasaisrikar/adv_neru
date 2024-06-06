import { Module } from "@nestjs/common";
import { BusinessCryptoModuleBase } from "./base/businessCrypto.module.base";
import { BusinessCryptoService } from "./businessCrypto.service";
import { BusinessCryptoController } from "./businessCrypto.controller";
import { BusinessCryptoResolver } from "./businessCrypto.resolver";

@Module({
  imports: [BusinessCryptoModuleBase],
  controllers: [BusinessCryptoController],
  providers: [BusinessCryptoService, BusinessCryptoResolver],
  exports: [BusinessCryptoService],
})
export class BusinessCryptoModule {}
