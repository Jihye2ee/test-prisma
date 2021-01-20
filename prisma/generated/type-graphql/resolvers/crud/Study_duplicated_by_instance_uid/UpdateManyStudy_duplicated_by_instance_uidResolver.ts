import * as TypeGraphQL from "type-graphql";
import { UpdateManyStudy_duplicated_by_instance_uidArgs } from "./args/UpdateManyStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class UpdateManyStudy_duplicated_by_instance_uidResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStudy_duplicated_by_instance_uidArgs): Promise<BatchPayload> {
    return ctx.prisma.study_duplicated_by_instance_uid.updateMany(args);
  }
}
