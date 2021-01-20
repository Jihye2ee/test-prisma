import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Task_storageWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  task_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  task_creation_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  task_object_json_string?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  task_type?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => [Task_storageWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Task_storageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Task_storageWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Task_storageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Task_storageWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Task_storageWhereInput[] | undefined;
}
