import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../node_modules/@prisma/client";
import { Study } from "../models/Study";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Patient {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  seq!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  patient_uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  patient_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  patient_sex!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  creation_timestamp!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  patient_age?: string | undefined;

  study?: Study[] | undefined;
}
