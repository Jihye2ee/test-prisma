import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportCreateInput } from "../../../inputs/Lung_rads_reportCreateInput";
import { Lung_rads_reportUpdateInput } from "../../../inputs/Lung_rads_reportUpdateInput";
import { Lung_rads_reportWhereUniqueInput } from "../../../inputs/Lung_rads_reportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportWhereUniqueInput, { nullable: false })
  where!: Lung_rads_reportWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lung_rads_reportCreateInput, { nullable: false })
  create!: Lung_rads_reportCreateInput;

  @TypeGraphQL.Field(_type => Lung_rads_reportUpdateInput, { nullable: false })
  update!: Lung_rads_reportUpdateInput;
}
