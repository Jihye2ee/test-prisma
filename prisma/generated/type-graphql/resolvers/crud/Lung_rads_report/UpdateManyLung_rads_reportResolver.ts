import * as TypeGraphQL from "type-graphql";
import { UpdateManyLung_rads_reportArgs } from "./args/UpdateManyLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class UpdateManyLung_rads_reportResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLung_rads_reportArgs): Promise<BatchPayload> {
    return ctx.prisma.lung_rads_report.updateMany(args);
  }
}
