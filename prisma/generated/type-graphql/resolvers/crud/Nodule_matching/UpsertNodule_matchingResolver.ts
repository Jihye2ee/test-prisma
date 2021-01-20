import * as TypeGraphQL from "type-graphql";
import { UpsertNodule_matchingArgs } from "./args/UpsertNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class UpsertNodule_matchingResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: false,
    description: undefined
  })
  async upsertNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodule_matchingArgs): Promise<Nodule_matching> {
    return ctx.prisma.nodule_matching.upsert(args);
  }
}
