import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneSeriesArgs {
  @TypeGraphQL.Field(_type => SeriesWhereUniqueInput, { nullable: false })
  where!: SeriesWhereUniqueInput;
}
