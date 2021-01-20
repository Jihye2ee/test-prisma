import * as TypeGraphQL from "type-graphql";
import { DeleteNodule_matchingArgs } from "./args/DeleteNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class DeleteNodule_matchingResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: true,
    description: undefined
  })
  async deleteNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodule_matchingArgs): Promise<Nodule_matching | undefined> {
    return ctx.prisma.nodule_matching.delete(args);
  }
}
