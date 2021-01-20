import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesCreateInput } from "../../../inputs/SeriesCreateInput";
import { SeriesUpdateInput } from "../../../inputs/SeriesUpdateInput";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSeriesArgs {
  @TypeGraphQL.Field(_type => SeriesWhereUniqueInput, { nullable: false })
  where!: SeriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SeriesCreateInput, { nullable: false })
  create!: SeriesCreateInput;

  @TypeGraphQL.Field(_type => SeriesUpdateInput, { nullable: false })
  update!: SeriesUpdateInput;
}
