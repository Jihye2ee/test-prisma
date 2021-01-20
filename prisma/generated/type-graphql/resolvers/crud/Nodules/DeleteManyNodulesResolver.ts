import * as TypeGraphQL from "type-graphql";
import { DeleteManyNodulesArgs } from "./args/DeleteManyNodulesArgs";
import { Nodules } from "../../../models/Nodules";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodules)
export class DeleteManyNodulesResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodulesArgs): Promise<BatchPayload> {
    return ctx.prisma.nodules.deleteMany(args);
  }
}
