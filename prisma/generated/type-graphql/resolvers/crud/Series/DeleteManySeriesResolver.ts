import * as TypeGraphQL from "type-graphql";
import { DeleteManySeriesArgs } from "./args/DeleteManySeriesArgs";
import { Series } from "../../../models/Series";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Series)
export class DeleteManySeriesResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySeriesArgs): Promise<BatchPayload> {
    return ctx.prisma.series.deleteMany(args);
  }
}
