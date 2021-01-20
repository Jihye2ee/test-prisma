import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportUpdateInput } from "../../../inputs/Lung_rads_reportUpdateInput";
import { Lung_rads_reportWhereUniqueInput } from "../../../inputs/Lung_rads_reportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportUpdateInput, { nullable: false })
  data!: Lung_rads_reportUpdateInput;

  @TypeGraphQL.Field(_type => Lung_rads_reportWhereUniqueInput, { nullable: false })
  where!: Lung_rads_reportWhereUniqueInput;
}
