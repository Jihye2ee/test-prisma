import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageUpdateManyMutationInput } from "../../../inputs/Task_storageUpdateManyMutationInput";
import { Task_storageWhereInput } from "../../../inputs/Task_storageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageUpdateManyMutationInput, { nullable: false })
  data!: Task_storageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Task_storageWhereInput, { nullable: true })
  where?: Task_storageWhereInput | undefined;
}
