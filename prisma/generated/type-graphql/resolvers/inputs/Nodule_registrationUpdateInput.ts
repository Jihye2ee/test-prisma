import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_registrationUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  seq?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  nodule_registration_request_uuid?: string | undefined;
}
