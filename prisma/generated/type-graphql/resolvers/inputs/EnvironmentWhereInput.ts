import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EnvironmentWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  item?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  json?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  last_update_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => [EnvironmentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: EnvironmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnvironmentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: EnvironmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnvironmentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: EnvironmentWhereInput[] | undefined;
}
