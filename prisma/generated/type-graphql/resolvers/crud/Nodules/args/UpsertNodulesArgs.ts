import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesCreateInput } from "../../../inputs/NodulesCreateInput";
import { NodulesUpdateInput } from "../../../inputs/NodulesUpdateInput";
import { NodulesWhereUniqueInput } from "../../../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesWhereUniqueInput, { nullable: false })
  where!: NodulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NodulesCreateInput, { nullable: false })
  create!: NodulesCreateInput;

  @TypeGraphQL.Field(_type => NodulesUpdateInput, { nullable: false })
  update!: NodulesUpdateInput;
}
