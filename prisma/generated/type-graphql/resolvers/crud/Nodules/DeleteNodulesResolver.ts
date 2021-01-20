import * as TypeGraphQL from "type-graphql";
import { DeleteNodulesArgs } from "./args/DeleteNodulesArgs";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class DeleteNodulesResolver {
  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: true,
    description: undefined
  })
  async deleteNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodulesArgs): Promise<Nodules | undefined> {
    return ctx.prisma.nodules.delete(args);
  }
}
