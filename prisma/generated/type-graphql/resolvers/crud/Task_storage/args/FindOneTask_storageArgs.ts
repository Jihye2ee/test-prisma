import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageWhereUniqueInput } from "../../../inputs/Task_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageWhereUniqueInput, { nullable: false })
  where!: Task_storageWhereUniqueInput;
}
