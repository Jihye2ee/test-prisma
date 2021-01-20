import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Internal_pacs_instanceUpdateInput } from "../../../inputs/Internal_pacs_instanceUpdateInput";
import { Internal_pacs_instanceWhereUniqueInput } from "../../../inputs/Internal_pacs_instanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateInternal_pacs_instanceArgs {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceUpdateInput, { nullable: false })
  data!: Internal_pacs_instanceUpdateInput;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereUniqueInput, { nullable: false })
  where!: Internal_pacs_instanceWhereUniqueInput;
}
