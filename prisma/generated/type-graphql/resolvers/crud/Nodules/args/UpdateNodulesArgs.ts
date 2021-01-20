import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesUpdateInput } from "../../../inputs/NodulesUpdateInput";
import { NodulesWhereUniqueInput } from "../../../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesUpdateInput, { nullable: false })
  data!: NodulesUpdateInput;

  @TypeGraphQL.Field(_type => NodulesWhereUniqueInput, { nullable: false })
  where!: NodulesWhereUniqueInput;
}
