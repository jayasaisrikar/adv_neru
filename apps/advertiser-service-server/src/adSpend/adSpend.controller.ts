import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdSpendService } from "./adSpend.service";
import { AdSpendControllerBase } from "./base/adSpend.controller.base";

@swagger.ApiTags("adSpends")
@common.Controller("adSpends")
export class AdSpendController extends AdSpendControllerBase {
  constructor(protected readonly service: AdSpendService) {
    super(service);
  }
}
