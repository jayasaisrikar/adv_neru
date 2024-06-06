/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BusinessCryptoWhereInput } from "./BusinessCryptoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BusinessCryptoOrderByInput } from "./BusinessCryptoOrderByInput";

@ArgsType()
class BusinessCryptoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BusinessCryptoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BusinessCryptoWhereInput, { nullable: true })
  @Type(() => BusinessCryptoWhereInput)
  where?: BusinessCryptoWhereInput;

  @ApiProperty({
    required: false,
    type: [BusinessCryptoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BusinessCryptoOrderByInput], { nullable: true })
  @Type(() => BusinessCryptoOrderByInput)
  orderBy?: Array<BusinessCryptoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BusinessCryptoFindManyArgs as BusinessCryptoFindManyArgs };