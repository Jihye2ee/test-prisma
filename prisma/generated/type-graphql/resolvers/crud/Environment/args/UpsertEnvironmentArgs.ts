import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentCreateInput } from "../../../inputs/EnvironmentCreateInput";
import { EnvironmentUpdateInput } from "../../../inputs/EnvironmentUpdateInput";
import { EnvironmentWhereUniqueInput } from "../../../inputs/EnvironmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentWhereUniqueInput, { nullable: false })
  where!: EnvironmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnvironmentCreateInput, { nullable: false })
  create!: EnvironmentCreateInput;

  @TypeGraphQL.Field(_type => EnvironmentUpdateInput, { nullable: false })
  update!: EnvironmentUpdateInput;
}
