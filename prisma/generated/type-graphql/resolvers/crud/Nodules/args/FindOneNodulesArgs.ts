import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesWhereUniqueInput } from "../../../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesWhereUniqueInput, { nullable: false })
  where!: NodulesWhereUniqueInput;
}
