import * as TypeGraphQL from "type-graphql";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";
import { Study } from "../../../models/Study";
import { Internal_pacs_instanceStudyArgs } from "./args/Internal_pacs_instanceStudyArgs";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class Internal_pacs_instanceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Study], {
    nullable: true,
    description: undefined,
  })
  async study(@TypeGraphQL.Root() internal_pacs_instance: Internal_pacs_instance, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Internal_pacs_instanceStudyArgs): Promise<Study[] | undefined> {
    return ctx.prisma.internal_pacs_instance.findOne({
      where: {
        seq: internal_pacs_instance.seq,
      },
    }).study(args);
  }
}
