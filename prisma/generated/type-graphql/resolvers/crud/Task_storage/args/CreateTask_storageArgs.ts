import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageCreateInput } from "../../../inputs/Task_storageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageCreateInput, { nullable: false })
  data!: Task_storageCreateInput;
}
