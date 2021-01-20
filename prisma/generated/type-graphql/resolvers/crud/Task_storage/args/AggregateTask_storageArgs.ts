import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Task_storageOrderByInput } from "../../../inputs/Task_storageOrderByInput";
import { Task_storageWhereInput } from "../../../inputs/Task_storageWhereInput";
import { Task_storageWhereUniqueInput } from "../../../inputs/Task_storageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTask_storageArgs {
  @TypeGraphQL.Field(_type => Task_storageWhereInput, { nullable: true })
  where?: Task_storageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Task_storageOrderByInput, { nullable: true })
  orderBy?: Task_storageOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Task_storageWhereUniqueInput, { nullable: true })
  cursor?: Task_storageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
