/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdLocationCreateNestedManyWithoutAdvertisersInput } from "./AdLocationCreateNestedManyWithoutAdvertisersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { AdSpendCreateNestedManyWithoutAdvertisersInput } from "./AdSpendCreateNestedManyWithoutAdvertisersInput";
import { BusinessCryptoCreateNestedManyWithoutAdvertisersInput } from "./BusinessCryptoCreateNestedManyWithoutAdvertisersInput";

@InputType()
class AdvertiserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AdLocationCreateNestedManyWithoutAdvertisersInput,
  })
  @ValidateNested()
  @Type(() => AdLocationCreateNestedManyWithoutAdvertisersInput)
  @IsOptional()
  @Field(() => AdLocationCreateNestedManyWithoutAdvertisersInput, {
    nullable: true,
  })
  adLocations?: AdLocationCreateNestedManyWithoutAdvertisersInput;

  @ApiProperty({
    required: false,
    type: () => AdSpendCreateNestedManyWithoutAdvertisersInput,
  })
  @ValidateNested()
  @Type(() => AdSpendCreateNestedManyWithoutAdvertisersInput)
  @IsOptional()
  @Field(() => AdSpendCreateNestedManyWithoutAdvertisersInput, {
    nullable: true,
  })
  adSpends?: AdSpendCreateNestedManyWithoutAdvertisersInput;

  @ApiProperty({
    required: false,
    type: () => BusinessCryptoCreateNestedManyWithoutAdvertisersInput,
  })
  @ValidateNested()
  @Type(() => BusinessCryptoCreateNestedManyWithoutAdvertisersInput)
  @IsOptional()
  @Field(() => BusinessCryptoCreateNestedManyWithoutAdvertisersInput, {
    nullable: true,
  })
  businessCryptos?: BusinessCryptoCreateNestedManyWithoutAdvertisersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { AdvertiserCreateInput as AdvertiserCreateInput };