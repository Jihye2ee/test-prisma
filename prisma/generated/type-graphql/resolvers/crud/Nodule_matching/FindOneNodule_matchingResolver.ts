import * as TypeGraphQL from "type-graphql";
import { FindOneNodule_matchingArgs } from "./args/FindOneNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class FindOneNodule_matchingResolver {
  @TypeGraphQL.Query(_returns => Nodule_matching, {
    nullable: true,
    description: undefined
  })
  async nodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodule_matchingArgs): Promise<Nodule_matching | undefined> {
    return ctx.prisma.nodule_matching.findOne(args);
  }
}
