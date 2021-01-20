import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportWhereInput } from "../../../inputs/Lung_rads_reportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportWhereInput, { nullable: true })
  where?: Lung_rads_reportWhereInput | undefined;
}
