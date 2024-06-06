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
import { AdLocationWhereInput } from "./AdLocationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdLocationOrderByInput } from "./AdLocationOrderByInput";

@ArgsType()
class AdLocationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdLocationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdLocationWhereInput, { nullable: true })
  @Type(() => AdLocationWhereInput)
  where?: AdLocationWhereInput;

  @ApiProperty({
    required: false,
    type: [AdLocationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdLocationOrderByInput], { nullable: true })
  @Type(() => AdLocationOrderByInput)
  orderBy?: Array<AdLocationOrderByInput>;

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

export { AdLocationFindManyArgs as AdLocationFindManyArgs };