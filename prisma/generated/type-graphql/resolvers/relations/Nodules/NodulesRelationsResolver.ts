import * as TypeGraphQL from "type-graphql";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class NodulesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Nodule_analysis_request_history, {
    nullable: false,
    description: undefined,
  })
  async nodule_analysis_request_history(@TypeGraphQL.Root() nodules: Nodules, @TypeGraphQL.Ctx() ctx: any): Promise<Nodule_analysis_request_history> {
    return ctx.prisma.nodules.findOne({
      where: {
        nodule_seq: nodules.nodule_seq,
      },
    }).nodule_analysis_request_history({});
  }
}
