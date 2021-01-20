import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageWhereInput } from "../../../inputs/Task_storageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageWhereInput, { nullable: true })
  where?: Task_storageWhereInput | undefined;
}
