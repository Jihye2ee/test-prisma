import * as TypeGraphQL from "type-graphql";
import { CreateInternal_pacs_instanceArgs } from "./args/CreateInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class CreateInternal_pacs_instanceResolver {
  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: false,
    description: undefined
  })
  async createInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateInternal_pacs_instanceArgs): Promise<Internal_pacs_instance> {
    return ctx.prisma.internal_pacs_instance.create(args);
  }
}
