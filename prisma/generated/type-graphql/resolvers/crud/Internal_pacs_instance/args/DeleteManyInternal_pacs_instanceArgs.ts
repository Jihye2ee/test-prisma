import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Internal_pacs_instanceWhereInput } from "../../../inputs/Internal_pacs_instanceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInternal_pacs_instanceArgs {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereInput, { nullable: true })
  where?: Internal_pacs_instanceWhereInput | undefined;
}
