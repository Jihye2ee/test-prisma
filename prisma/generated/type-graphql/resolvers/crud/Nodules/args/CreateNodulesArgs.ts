import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesCreateInput } from "../../../inputs/NodulesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesCreateInput, { nullable: false })
  data!: NodulesCreateInput;
}
