import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdvertiserService } from "./advertiser.service";
import { AdvertiserControllerBase } from "./base/advertiser.controller.base";

@swagger.ApiTags("advertisers")
@common.Controller("advertisers")
export class AdvertiserController extends AdvertiserControllerBase {
  constructor(protected readonly service: AdvertiserService) {
    super(service);
  }
}
