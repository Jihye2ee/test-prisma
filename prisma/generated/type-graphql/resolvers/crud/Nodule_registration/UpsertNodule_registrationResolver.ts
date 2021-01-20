import * as TypeGraphQL from "type-graphql";
import { UpsertNodule_registrationArgs } from "./args/UpsertNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class UpsertNodule_registrationResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: false,
    description: undefined
  })
  async upsertNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodule_registrationArgs): Promise<Nodule_registration> {
    return ctx.prisma.nodule_registration.upsert(args);
  }
}
