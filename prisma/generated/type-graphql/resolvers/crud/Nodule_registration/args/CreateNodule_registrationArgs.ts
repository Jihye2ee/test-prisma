import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationCreateInput } from "../../../inputs/Nodule_registrationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationCreateInput, { nullable: false })
  data!: Nodule_registrationCreateInput;
}
