import * as TypeGraphQL from "type-graphql";
import { FindOneInternal_pacs_instanceArgs } from "./args/FindOneInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class FindOneInternal_pacs_instanceResolver {
  @TypeGraphQL.Query(_returns => Internal_pacs_instance, {
    nullable: true,
    description: undefined
  })
  async internal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneInternal_pacs_instanceArgs): Promise<Internal_pacs_instance | undefined> {
    return ctx.prisma.internal_pacs_instance.findOne(args);
  }
}
