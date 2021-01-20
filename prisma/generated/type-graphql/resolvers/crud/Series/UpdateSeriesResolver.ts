import * as TypeGraphQL from "type-graphql";
import { UpdateSeriesArgs } from "./args/UpdateSeriesArgs";
import { Series } from "../../../models/Series";

@TypeGraphQL.Resolver(_of => Series)
export class UpdateSeriesResolver {
  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: true,
    description: undefined
  })
  async updateSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSeriesArgs): Promise<Series | undefined> {
    return ctx.prisma.series.update(args);
  }
}
