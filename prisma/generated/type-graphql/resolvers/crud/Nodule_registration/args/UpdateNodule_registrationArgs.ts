import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationUpdateInput } from "../../../inputs/Nodule_registrationUpdateInput";
import { Nodule_registrationWhereUniqueInput } from "../../../inputs/Nodule_registrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationUpdateInput, { nullable: false })
  data!: Nodule_registrationUpdateInput;

  @TypeGraphQL.Field(_type => Nodule_registrationWhereUniqueInput, { nullable: false })
  where!: Nodule_registrationWhereUniqueInput;
}
