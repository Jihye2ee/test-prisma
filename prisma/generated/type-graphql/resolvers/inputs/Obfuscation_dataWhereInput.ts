import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Obfuscation_dataWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  obfuscated_data?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  creation_time?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  original_data?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => [Obfuscation_dataWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Obfuscation_dataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Obfuscation_dataWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Obfuscation_dataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Obfuscation_dataWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Obfuscation_dataWhereInput[] | undefined;
}
