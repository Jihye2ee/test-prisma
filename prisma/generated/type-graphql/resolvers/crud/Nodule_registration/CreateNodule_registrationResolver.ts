import * as TypeGraphQL from "type-graphql";
import { CreateNodule_registrationArgs } from "./args/CreateNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class CreateNodule_registrationResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: false,
    description: undefined
  })
  async createNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodule_registrationArgs): Promise<Nodule_registration> {
    return ctx.prisma.nodule_registration.create(args);
  }
}
