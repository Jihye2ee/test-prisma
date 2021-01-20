import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationWhereInput } from "../../../inputs/Nodule_registrationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationWhereInput, { nullable: true })
  where?: Nodule_registrationWhereInput | undefined;
}
