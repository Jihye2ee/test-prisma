import * as TypeGraphQL from "type-graphql";
import { DeleteSeriesArgs } from "./args/DeleteSeriesArgs";
import { Series } from "../../../models/Series";

@TypeGraphQL.Resolver(_of => Series)
export class DeleteSeriesResolver {
  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: true,
    description: undefined
  })
  async deleteSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSeriesArgs): Promise<Series | undefined> {
    return ctx.prisma.series.delete(args);
  }
}
