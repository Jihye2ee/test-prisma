import * as TypeGraphQL from "type-graphql";
import { CreateNodule_matchingArgs } from "./args/CreateNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class CreateNodule_matchingResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: false,
    description: undefined
  })
  async createNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodule_matchingArgs): Promise<Nodule_matching> {
    return ctx.prisma.nodule_matching.create(args);
  }
}
