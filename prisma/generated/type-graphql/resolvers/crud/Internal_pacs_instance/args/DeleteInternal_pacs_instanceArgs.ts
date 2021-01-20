import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Internal_pacs_instanceWhereUniqueInput } from "../../../inputs/Internal_pacs_instanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteInternal_pacs_instanceArgs {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereUniqueInput, { nullable: false })
  where!: Internal_pacs_instanceWhereUniqueInput;
}
