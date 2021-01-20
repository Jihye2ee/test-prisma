import * as TypeGraphQL from "type-graphql";
import { FindManyNodule_registrationArgs } from "./args/FindManyNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class FindManyNodule_registrationResolver {
  @TypeGraphQL.Query(_returns => [Nodule_registration], {
    nullable: false,
    description: undefined
  })
  async nodule_registrations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodule_registrationArgs): Promise<Nodule_registration[]> {
    return ctx.prisma.nodule_registration.findMany(args);
  }
}
