import * as TypeGraphQL from "type-graphql";
import { DeleteManyInternal_pacs_instanceArgs } from "./args/DeleteManyInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class DeleteManyInternal_pacs_instanceResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyInternal_pacs_instanceArgs): Promise<BatchPayload> {
    return ctx.prisma.internal_pacs_instance.deleteMany(args);
  }
}
