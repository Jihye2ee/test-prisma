import * as TypeGraphQL from "type-graphql";
import { AggregateTask_storageArgs } from "./args/AggregateTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";
import { AggregateTask_storage } from "../../outputs/AggregateTask_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class AggregateTask_storageResolver {
  @TypeGraphQL.Query(_returns => AggregateTask_storage, {
    nullable: false,
    description: undefined
  })
  async aggregateTask_storage(@TypeGraphQL.Args() args: AggregateTask_storageArgs): Promise<AggregateTask_storage> {
    return new AggregateTask_storage();
  }
}
