import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { SeriesWhereInput } from "../inputs/SeriesWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SeriesFilter {
  @TypeGraphQL.Field(_type => SeriesWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SeriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SeriesWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SeriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SeriesWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SeriesWhereInput | undefined;
}