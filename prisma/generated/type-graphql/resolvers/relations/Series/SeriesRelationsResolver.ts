import * as TypeGraphQL from "type-graphql";
import { Series } from "../../../models/Series";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Series)
export class SeriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Study, {
    nullable: false,
    description: undefined,
  })
  async study(@TypeGraphQL.Root() series: Series, @TypeGraphQL.Ctx() ctx: any): Promise<Study> {
    return ctx.prisma.series.findOne({
      where: {
        seq: series.seq,
      },
    }).study({});
  }
}
