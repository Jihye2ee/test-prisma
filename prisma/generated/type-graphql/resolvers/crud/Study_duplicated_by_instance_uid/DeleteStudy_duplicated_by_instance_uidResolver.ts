import * as TypeGraphQL from "type-graphql";
import { DeleteStudy_duplicated_by_instance_uidArgs } from "./args/DeleteStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class DeleteStudy_duplicated_by_instance_uidResolver {
  @TypeGraphQL.Mutation(_returns => Study_duplicated_by_instance_uid, {
    nullable: true,
    description: undefined
  })
  async deleteStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid | undefined> {
    return ctx.prisma.study_duplicated_by_instance_uid.delete(args);
  }
}
