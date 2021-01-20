import * as TypeGraphQL from "type-graphql";
import { DeleteManyNodule_matchingArgs } from "./args/DeleteManyNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class DeleteManyNodule_matchingResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodule_matchingArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_matching.deleteMany(args);
  }
}
