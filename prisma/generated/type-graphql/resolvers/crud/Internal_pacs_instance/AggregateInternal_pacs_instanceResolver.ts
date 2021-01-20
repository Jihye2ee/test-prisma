import * as TypeGraphQL from "type-graphql";
import { AggregateInternal_pacs_instanceArgs } from "./args/AggregateInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";
import { AggregateInternal_pacs_instance } from "../../outputs/AggregateInternal_pacs_instance";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class AggregateInternal_pacs_instanceResolver {
  @TypeGraphQL.Query(_returns => AggregateInternal_pacs_instance, {
    nullable: false,
    description: undefined
  })
  async aggregateInternal_pacs_instance(@TypeGraphQL.Args() args: AggregateInternal_pacs_instanceArgs): Promise<AggregateInternal_pacs_instance> {
    return new AggregateInternal_pacs_instance();
  }
}
