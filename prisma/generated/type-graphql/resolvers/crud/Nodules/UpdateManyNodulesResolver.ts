import * as TypeGraphQL from "type-graphql";
import { UpdateManyNodulesArgs } from "./args/UpdateManyNodulesArgs";
import { Nodules } from "../../../models/Nodules";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodules)
export class UpdateManyNodulesResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodulesArgs): Promise<BatchPayload> {
    return ctx.prisma.nodules.updateMany(args);
  }
}
