import * as TypeGraphQL from "type-graphql";
import { Patient } from "../../../models/Patient";
import { Study } from "../../../models/Study";
import { PatientStudyArgs } from "./args/PatientStudyArgs";

@TypeGraphQL.Resolver(_of => Patient)
export class PatientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Study], {
    nullable: true,
    description: undefined,
  })
  async study(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PatientStudyArgs): Promise<Study[] | undefined> {
    return ctx.prisma.patient.findOne({
      where: {
        seq: patient.seq,
      },
    }).study(args);
  }
}
