import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportOrderByInput } from "../../../inputs/Lung_rads_reportOrderByInput";
import { Lung_rads_reportWhereInput } from "../../../inputs/Lung_rads_reportWhereInput";
import { Lung_rads_reportWhereUniqueInput } from "../../../inputs/Lung_rads_reportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportWhereInput, { nullable: true })
  where?: Lung_rads_reportWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lung_rads_reportOrderByInput, { nullable: true })
  orderBy?: Lung_rads_reportOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Lung_rads_reportWhereUniqueInput, { nullable: true })
  cursor?: Lung_rads_reportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
