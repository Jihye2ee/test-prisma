import * as TypeGraphQL from "type-graphql";
import { UpdateInternal_pacs_instanceArgs } from "./args/UpdateInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class UpdateInternal_pacs_instanceResolver {
  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: true,
    description: undefined
  })
  async updateInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateInternal_pacs_instanceArgs): Promise<Internal_pacs_instance | undefined> {
    return ctx.prisma.internal_pacs_instance.update(args);
  }
}
