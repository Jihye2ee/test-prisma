import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationWhereUniqueInput } from "../../../inputs/Nodule_registrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationWhereUniqueInput, { nullable: false })
  where!: Nodule_registrationWhereUniqueInput;
}
