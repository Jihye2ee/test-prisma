import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesUpdateInput } from "../../../inputs/SeriesUpdateInput";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSeriesArgs {
  @TypeGraphQL.Field(_type => SeriesUpdateInput, { nullable: false })
  data!: SeriesUpdateInput;

  @TypeGraphQL.Field(_type => SeriesWhereUniqueInput, { nullable: false })
  where!: SeriesWhereUniqueInput;
}
