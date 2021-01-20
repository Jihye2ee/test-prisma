import * as TypeGraphQL from "type-graphql";
import { DeleteManyNodule_registrationArgs } from "./args/DeleteManyNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class DeleteManyNodule_registrationResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodule_registrationArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_registration.deleteMany(args);
  }
}
