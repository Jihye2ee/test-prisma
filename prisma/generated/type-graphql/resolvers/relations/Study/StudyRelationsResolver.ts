import * as TypeGraphQL from "type-graphql";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";
import { Patient } from "../../../models/Patient";
import { Series } from "../../../models/Series";
import { Study } from "../../../models/Study";
import { StudySeriesArgs } from "./args/StudySeriesArgs";

@TypeGraphQL.Resolver(_of => Study)
export class StudyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Internal_pacs_instance, {
    nullable: true,
    description: undefined,
  })
  async internal_pacs_instance(@TypeGraphQL.Root() study: Study, @TypeGraphQL.Ctx() ctx: any): Promise<Internal_pacs_instance | undefined> {
    return ctx.prisma.study.findOne({
      where: {
        seq: study.seq,
      },
    }).internal_pacs_instance({});
  }

  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false,
    description: undefined,
  })
  async patient(@TypeGraphQL.Root() study: Study, @TypeGraphQL.Ctx() ctx: any): Promise<Patient> {
    return ctx.prisma.study.findOne({
      where: {
        seq: study.seq,
      },
    }).patient({});
  }

  @TypeGraphQL.FieldResolver(_type => [Series], {
    nullable: true,
    description: undefined,
  })
  async series(@TypeGraphQL.Root() study: Study, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudySeriesArgs): Promise<Series[] | undefined> {
    return ctx.prisma.study.findOne({
      where: {
        seq: study.seq,
      },
    }).series(args);
  }
}
