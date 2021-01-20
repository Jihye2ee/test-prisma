import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Internal_pacs_instanceCreateInput } from "../../../inputs/Internal_pacs_instanceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateInternal_pacs_instanceArgs {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceCreateInput, { nullable: false })
  data!: Internal_pacs_instanceCreateInput;
}
