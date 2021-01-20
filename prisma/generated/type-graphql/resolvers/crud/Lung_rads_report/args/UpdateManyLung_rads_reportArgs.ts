import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Lung_rads_reportUpdateManyMutationInput } from "../../../inputs/Lung_rads_reportUpdateManyMutationInput";
import { Lung_rads_reportWhereInput } from "../../../inputs/Lung_rads_reportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLung_rads_reportArgs {
  @TypeGraphQL.Field(_type => Lung_rads_reportUpdateManyMutationInput, { nullable: false })
  data!: Lung_rads_reportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Lung_rads_reportWhereInput, { nullable: true })
  where?: Lung_rads_reportWhereInput | undefined;
}
