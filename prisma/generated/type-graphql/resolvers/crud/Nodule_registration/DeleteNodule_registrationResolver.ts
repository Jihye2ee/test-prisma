import * as TypeGraphQL from "type-graphql";
import { DeleteNodule_registrationArgs } from "./args/DeleteNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class DeleteNodule_registrationResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: true,
    description: undefined
  })
  async deleteNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodule_registrationArgs): Promise<Nodule_registration | undefined> {
    return ctx.prisma.nodule_registration.delete(args);
  }
}
