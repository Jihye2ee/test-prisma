import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageCreateInput } from "../../../inputs/Task_storageCreateInput";
import { Task_storageUpdateInput } from "../../../inputs/Task_storageUpdateInput";
import { Task_storageWhereUniqueInput } from "../../../inputs/Task_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageWhereUniqueInput, { nullable: false })
  where!: Task_storageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Task_storageCreateInput, { nullable: false })
  create!: Task_storageCreateInput;

  @TypeGraphQL.Field(_type => Task_storageUpdateInput, { nullable: false })
  update!: Task_storageUpdateInput;
}
