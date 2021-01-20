import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { Internal_pacs_instanceCreateWithoutStudyInput } from "../inputs/Internal_pacs_instanceCreateWithoutStudyInput";
import { Internal_pacs_instanceUpdateWithoutStudyDataInput } from "../inputs/Internal_pacs_instanceUpdateWithoutStudyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Internal_pacs_instanceUpsertWithoutStudyInput {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceUpdateWithoutStudyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: Internal_pacs_instanceUpdateWithoutStudyDataInput;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceCreateWithoutStudyInput, {
    nullable: false,
    description: undefined
  })
  create!: Internal_pacs_instanceCreateWithoutStudyInput;
}
