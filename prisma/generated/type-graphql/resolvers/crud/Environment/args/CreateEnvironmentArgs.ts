import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentCreateInput } from "../../../inputs/EnvironmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentCreateInput, { nullable: false })
  data!: EnvironmentCreateInput;
}
