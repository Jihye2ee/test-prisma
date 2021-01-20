import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationCreateInput } from "../../../inputs/Nodule_registrationCreateInput";
import { Nodule_registrationUpdateInput } from "../../../inputs/Nodule_registrationUpdateInput";
import { Nodule_registrationWhereUniqueInput } from "../../../inputs/Nodule_registrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationWhereUniqueInput, { nullable: false })
  where!: Nodule_registrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Nodule_registrationCreateInput, { nullable: false })
  create!: Nodule_registrationCreateInput;

  @TypeGraphQL.Field(_type => Nodule_registrationUpdateInput, { nullable: false })
  update!: Nodule_registrationUpdateInput;
}
