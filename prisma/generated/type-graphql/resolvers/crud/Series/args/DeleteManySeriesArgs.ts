import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySeriesArgs {
  @TypeGraphQL.Field(_type => SeriesWhereInput, { nullable: true })
  where?: SeriesWhereInput | undefined;
}
