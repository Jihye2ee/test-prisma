import * as TypeGraphQL from "type-graphql";
import { UpdateNodule_matchingArgs } from "./args/UpdateNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class UpdateNodule_matchingResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: true,
    description: undefined
  })
  async updateNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodule_matchingArgs): Promise<Nodule_matching | undefined> {
    return ctx.prisma.nodule_matching.update(args);
  }
}
