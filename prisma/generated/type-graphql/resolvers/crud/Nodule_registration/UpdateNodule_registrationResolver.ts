import * as TypeGraphQL from "type-graphql";
import { UpdateNodule_registrationArgs } from "./args/UpdateNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class UpdateNodule_registrationResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: true,
    description: undefined
  })
  async updateNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodule_registrationArgs): Promise<Nodule_registration | undefined> {
    return ctx.prisma.nodule_registration.update(args);
  }
}
