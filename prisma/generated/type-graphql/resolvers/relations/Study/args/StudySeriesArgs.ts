import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesOrderByInput } from "../../../inputs/SeriesOrderByInput";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class StudySeriesArgs {
  @TypeGraphQL.Field(_type => SeriesWhereInput, { nullable: true })
  where?: SeriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SeriesOrderByInput, { nullable: true })
  orderBy?: SeriesOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SeriesWhereUniqueInput, { nullable: true })
  cursor?: SeriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
