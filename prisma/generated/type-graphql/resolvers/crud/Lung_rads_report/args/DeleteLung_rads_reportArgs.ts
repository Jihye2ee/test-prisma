import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportWhereUniqueInput } from "../../../inputs/Lung_rads_reportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportWhereUniqueInput, { nullable: false })
  where!: Lung_rads_reportWhereUniqueInput;
}
