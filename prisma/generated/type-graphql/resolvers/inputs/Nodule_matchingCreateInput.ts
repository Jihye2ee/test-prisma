import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_matchingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  nodule_matching_request_uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  study_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  series_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  nodule_uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  comparison_study_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  comparison_series_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  comparison_nodule_uuid!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  user_id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  link_status?: number | undefined;
}
