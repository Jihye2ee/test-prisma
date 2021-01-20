import * as TypeGraphQL from "type-graphql";
import { UpsertInternal_pacs_instanceArgs } from "./args/UpsertInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class UpsertInternal_pacs_instanceResolver {
  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: false,
    description: undefined
  })
  async upsertInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertInternal_pacs_instanceArgs): Promise<Internal_pacs_instance> {
    return ctx.prisma.internal_pacs_instance.upsert(args);
  }
}
