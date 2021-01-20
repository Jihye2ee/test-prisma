import * as TypeGraphQL from "type-graphql";
import { FindOneStudy_duplicated_by_instance_uidArgs } from "./args/FindOneStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class FindOneStudy_duplicated_by_instance_uidResolver {
  @TypeGraphQL.Query(_returns => Study_duplicated_by_instance_uid, {
    nullable: true,
    description: undefined
  })
  async study_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid | undefined> {
    return ctx.prisma.study_duplicated_by_instance_uid.findOne(args);
  }
}
