import * as TypeGraphQL from "type-graphql";
import { UpdateNodulesArgs } from "./args/UpdateNodulesArgs";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class UpdateNodulesResolver {
  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: true,
    description: undefined
  })
  async updateNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodulesArgs): Promise<Nodules | undefined> {
    return ctx.prisma.nodules.update(args);
  }
}
