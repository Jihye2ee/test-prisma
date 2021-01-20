import * as TypeGraphQL from "type-graphql";
import { UpdateManyNodule_matchingArgs } from "./args/UpdateManyNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class UpdateManyNodule_matchingResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodule_matchingArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_matching.updateMany(args);
  }
}
