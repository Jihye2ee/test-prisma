import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_registrationOrderByInput } from "../../../inputs/Nodule_registrationOrderByInput";
import { Nodule_registrationWhereInput } from "../../../inputs/Nodule_registrationWhereInput";
import { Nodule_registrationWhereUniqueInput } from "../../../inputs/Nodule_registrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyNodule_registrationArgs {
  @TypeGraphQL.Field(_type => Nodule_registrationWhereInput, { nullable: true })
  where?: Nodule_registrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_registrationOrderByInput, { nullable: true })
  orderBy?: Nodule_registrationOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_registrationWhereUniqueInput, { nullable: true })
  cursor?: Nodule_registrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
