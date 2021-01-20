import * as TypeGraphQL from "type-graphql";
import { CreateStudy_duplicated_by_instance_uidArgs } from "./args/CreateStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class CreateStudy_duplicated_by_instance_uidResolver {
  @TypeGraphQL.Mutation(_returns => Study_duplicated_by_instance_uid, {
    nullable: false,
    description: undefined
  })
  async createStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid> {
    return ctx.prisma.study_duplicated_by_instance_uid.create(args);
  }
}
