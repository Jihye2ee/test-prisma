import * as TypeGraphQL from "type-graphql";
import { AggregateGarbage_collectionArgs } from "./args/AggregateGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";
import { AggregateGarbage_collection } from "../../outputs/AggregateGarbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class AggregateGarbage_collectionResolver {
  @TypeGraphQL.Query(_returns => AggregateGarbage_collection, {
    nullable: false,
    description: undefined
  })
  async aggregateGarbage_collection(@TypeGraphQL.Args() args: AggregateGarbage_collectionArgs): Promise<AggregateGarbage_collection> {
    return new AggregateGarbage_collection();
  }
}
