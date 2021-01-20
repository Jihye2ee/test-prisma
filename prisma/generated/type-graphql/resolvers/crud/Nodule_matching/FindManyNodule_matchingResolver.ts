import * as TypeGraphQL from "type-graphql";
import { FindManyNodule_matchingArgs } from "./args/FindManyNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class FindManyNodule_matchingResolver {
  @TypeGraphQL.Query(_returns => [Nodule_matching], {
    nullable: false,
    description: undefined
  })
  async nodule_matchings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodule_matchingArgs): Promise<Nodule_matching[]> {
    return ctx.prisma.nodule_matching.findMany(args);
  }
}
