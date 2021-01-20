import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportCreateInput } from "../../../inputs/Lung_rads_reportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportCreateInput, { nullable: false })
  data!: Lung_rads_reportCreateInput;
}
