import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_registrationWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  nodule_registration_request_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => [Nodule_registrationWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Nodule_registrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Nodule_registrationWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Nodule_registrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Nodule_registrationWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Nodule_registrationWhereInput[] | undefined;
}