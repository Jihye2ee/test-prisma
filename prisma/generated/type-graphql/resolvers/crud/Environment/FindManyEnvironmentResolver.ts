import * as TypeGraphQL from "type-graphql";
import { FindManyEnvironmentArgs } from "./args/FindManyEnvironmentArgs";
import { Environment } from "../../../models/Environment";

@TypeGraphQL.Resolver(_of => Environment)
export class FindManyEnvironmentResolver {
  @TypeGraphQL.Query(_returns => [Environment], {
    nullable: false,
    description: undefined
  })
  async environments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyEnvironmentArgs): Promise<Environment[]> {
    return ctx.prisma.environment.findMany(args);
  }
}
