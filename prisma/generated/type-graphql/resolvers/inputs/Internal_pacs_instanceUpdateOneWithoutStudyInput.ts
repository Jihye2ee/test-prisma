import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { Internal_pacs_instanceCreateWithoutStudyInput } from "../inputs/Internal_pacs_instanceCreateWithoutStudyInput";
import { Internal_pacs_instanceUpdateWithoutStudyDataInput } from "../inputs/Internal_pacs_instanceUpdateWithoutStudyDataInput";
import { Internal_pacs_instanceUpsertWithoutStudyInput } from "../inputs/Internal_pacs_instanceUpsertWithoutStudyInput";
import { Internal_pacs_instanceWhereUniqueInput } from "../inputs/Internal_pacs_instanceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Internal_pacs_instanceUpdateOneWithoutStudyInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceUpdateWithoutStudyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: Internal_pacs_instanceUpdateWithoutStudyDataInput | undefined;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceUpsertWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: Internal_pacs_instanceUpsertWithoutStudyInput | undefined;
}
