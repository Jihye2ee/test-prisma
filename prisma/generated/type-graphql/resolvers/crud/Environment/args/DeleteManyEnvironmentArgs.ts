import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentWhereInput } from "../../../inputs/EnvironmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentWhereInput, { nullable: true })
  where?: EnvironmentWhereInput | undefined;
}
