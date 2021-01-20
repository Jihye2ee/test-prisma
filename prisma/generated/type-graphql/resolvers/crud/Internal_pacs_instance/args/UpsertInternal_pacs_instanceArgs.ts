import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Internal_pacs_instanceCreateInput } from "../../../inputs/Internal_pacs_instanceCreateInput";
import { Internal_pacs_instanceUpdateInput } from "../../../inputs/Internal_pacs_instanceUpdateInput";
import { Internal_pacs_instanceWhereUniqueInput } from "../../../inputs/Internal_pacs_instanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInternal_pacs_instanceArgs {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereUniqueInput, { nullable: false })
  where!: Internal_pacs_instanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceCreateInput, { nullable: false })
  create!: Internal_pacs_instanceCreateInput;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceUpdateInput, { nullable: false })
  update!: Internal_pacs_instanceUpdateInput;
}
