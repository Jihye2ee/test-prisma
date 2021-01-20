import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SeriesUpdateManyMutationInput } from "../../../inputs/SeriesUpdateManyMutationInput";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySeriesArgs {
  @TypeGraphQL.Field(_type => SeriesUpdateManyMutationInput, { nullable: false })
  data!: SeriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SeriesWhereInput, { nullable: true })
  where?: SeriesWhereInput | undefined;
}
