import * as TypeGraphQL from "type-graphql";
import { FindManyInternal_pacs_instanceArgs } from "./args/FindManyInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class FindManyInternal_pacs_instanceResolver {
  @TypeGraphQL.Query(_returns => [Internal_pacs_instance], {
    nullable: false,
    description: undefined
  })
  async internal_pacs_instances(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyInternal_pacs_instanceArgs): Promise<Internal_pacs_instance[]> {
    return ctx.prisma.internal_pacs_instance.findMany(args);
  }
}
