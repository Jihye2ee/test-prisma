import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NodulesScalarWhereInput } from "../inputs/NodulesScalarWhereInput";
import { NodulesUpdateManyDataInput } from "../inputs/NodulesUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NodulesUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => NodulesScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: NodulesScalarWhereInput;

  @TypeGraphQL.Field(_type => NodulesUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: NodulesUpdateManyDataInput;
}
