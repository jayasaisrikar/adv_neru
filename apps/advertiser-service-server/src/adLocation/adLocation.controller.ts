import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdLocationService } from "./adLocation.service";
import { AdLocationControllerBase } from "./base/adLocation.controller.base";

@swagger.ApiTags("adLocations")
@common.Controller("adLocations")
export class AdLocationController extends AdLocationControllerBase {
  constructor(protected readonly service: AdLocationService) {
    super(service);
  }
}
