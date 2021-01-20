import * as TypeGraphQL from "type-graphql";
import { UpdateManyNodule_registrationArgs } from "./args/UpdateManyNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class UpdateManyNodule_registrationResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodule_registrationArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_registration.updateMany(args);
  }
}
