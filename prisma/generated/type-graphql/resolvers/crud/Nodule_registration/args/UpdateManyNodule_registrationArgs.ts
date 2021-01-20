import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationUpdateManyMutationInput } from "../../../inputs/Nodule_registrationUpdateManyMutationInput";
import { Nodule_registrationWhereInput } from "../../../inputs/Nodule_registrationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationUpdateManyMutationInput, { nullable: false })
  data!: Nodule_registrationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Nodule_registrationWhereInput, { nullable: true })
  where?: Nodule_registrationWhereInput | undefined;
}
