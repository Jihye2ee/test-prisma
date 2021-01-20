import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { SeriesScalarWhereInput } from "../inputs/SeriesScalarWhereInput";
import { SeriesUpdateManyDataInput } from "../inputs/SeriesUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SeriesUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => SeriesScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SeriesScalarWhereInput;

  @TypeGraphQL.Field(_type => SeriesUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SeriesUpdateManyDataInput;
}
