import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../node_modules/@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Task_storage {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  task_uuid!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  task_creation_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  task_object_json_string?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  task_type?: string | undefined;
}
