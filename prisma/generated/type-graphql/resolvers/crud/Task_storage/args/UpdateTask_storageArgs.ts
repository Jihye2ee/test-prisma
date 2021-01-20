import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageUpdateInput } from "../../../inputs/Task_storageUpdateInput";
import { Task_storageWhereUniqueInput } from "../../../inputs/Task_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageUpdateInput, { nullable: false })
  data!: Task_storageUpdateInput;

  @TypeGraphQL.Field(_type => Task_storageWhereUniqueInput, { nullable: false })
  where!: Task_storageWhereUniqueInput;
}
