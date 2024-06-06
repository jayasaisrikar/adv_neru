import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusinessCryptoService } from "./businessCrypto.service";
import { BusinessCryptoControllerBase } from "./base/businessCrypto.controller.base";

@swagger.ApiTags("businessCryptos")
@common.Controller("businessCryptos")
export class BusinessCryptoController extends BusinessCryptoControllerBase {
  constructor(protected readonly service: BusinessCryptoService) {
    super(service);
  }
}
