import * as TypeGraphQL from "type-graphql";
import { UpdateManySeriesArgs } from "./args/UpdateManySeriesArgs";
import { Series } from "../../../models/Series";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Series)
export class UpdateManySeriesResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySeriesArgs): Promise<BatchPayload> {
    return ctx.prisma.series.updateMany(args);
  }
}
