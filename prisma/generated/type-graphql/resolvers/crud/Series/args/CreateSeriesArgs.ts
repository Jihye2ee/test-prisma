import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesCreateInput } from "../../../inputs/SeriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSeriesArgs {
  @TypeGraphQL.Field(_type => SeriesCreateInput, { nullable: false })
  data!: SeriesCreateInput;
}
