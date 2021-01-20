import * as TypeGraphQL from "type-graphql";
import { UpsertSeriesArgs } from "./args/UpsertSeriesArgs";
import { Series } from "../../../models/Series";

@TypeGraphQL.Resolver(_of => Series)
export class UpsertSeriesResolver {
  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: false,
    description: undefined
  })
  async upsertSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSeriesArgs): Promise<Series> {
    return ctx.prisma.series.upsert(args);
  }
}
