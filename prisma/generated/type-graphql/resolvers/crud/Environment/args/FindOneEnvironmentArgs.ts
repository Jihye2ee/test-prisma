import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentWhereUniqueInput } from "../../../inputs/EnvironmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentWhereUniqueInput, { nullable: false })
  where!: EnvironmentWhereUniqueInput;
}