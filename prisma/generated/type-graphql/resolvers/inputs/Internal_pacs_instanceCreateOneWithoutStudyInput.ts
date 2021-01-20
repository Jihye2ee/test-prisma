import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { Internal_pacs_instanceCreateWithoutStudyInput } from "../inputs/Internal_pacs_instanceCreateWithoutStudyInput";
import { Internal_pacs_instanceWhereUniqueInput } from "../inputs/Internal_pacs_instanceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Internal_pacs_instanceCreateOneWithoutStudyInput {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceCreateWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  create?: Internal_pacs_instanceCreateWithoutStudyInput | undefined;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: Internal_pacs_instanceWhereUniqueInput | undefined;
}
