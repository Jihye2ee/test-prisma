import * as TypeGraphQL from "type-graphql";
import { FindManyStudy_duplicated_by_instance_uidArgs } from "./args/FindManyStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class FindManyStudy_duplicated_by_instance_uidResolver {
  @TypeGraphQL.Query(_returns => [Study_duplicated_by_instance_uid], {
    nullable: false,
    description: undefined
  })
  async study_duplicated_by_instance_uids(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid[]> {
    return ctx.prisma.study_duplicated_by_instance_uid.findMany(args);
  }
}
