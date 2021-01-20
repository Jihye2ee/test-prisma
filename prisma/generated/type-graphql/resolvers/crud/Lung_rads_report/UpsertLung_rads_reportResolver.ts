import * as TypeGraphQL from "type-graphql";
import { UpsertLung_rads_reportArgs } from "./args/UpsertLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class UpsertLung_rads_reportResolver {
  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: false,
    description: undefined
  })
  async upsertLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLung_rads_reportArgs): Promise<Lung_rads_report> {
    return ctx.prisma.lung_rads_report.upsert(args);
  }
}
