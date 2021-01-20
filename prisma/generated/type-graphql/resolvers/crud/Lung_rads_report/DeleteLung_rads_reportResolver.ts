import * as TypeGraphQL from "type-graphql";
import { DeleteLung_rads_reportArgs } from "./args/DeleteLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class DeleteLung_rads_reportResolver {
  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: true,
    description: undefined
  })
  async deleteLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLung_rads_reportArgs): Promise<Lung_rads_report | undefined> {
    return ctx.prisma.lung_rads_report.delete(args);
  }
}
