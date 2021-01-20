import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NodulesWhereInput } from "../inputs/NodulesWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NodulesFilter {
  @TypeGraphQL.Field(_type => NodulesWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: NodulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NodulesWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: NodulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NodulesWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: NodulesWhereInput | undefined;
}
