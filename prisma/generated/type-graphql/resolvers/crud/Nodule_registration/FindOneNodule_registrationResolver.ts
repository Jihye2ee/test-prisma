import * as TypeGraphQL from "type-graphql";
import { FindOneNodule_registrationArgs } from "./args/FindOneNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class FindOneNodule_registrationResolver {
  @TypeGraphQL.Query(_returns => Nodule_registration, {
    nullable: true,
    description: undefined
  })
  async nodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodule_registrationArgs): Promise<Nodule_registration | undefined> {
    return ctx.prisma.nodule_registration.findOne(args);
  }
}
