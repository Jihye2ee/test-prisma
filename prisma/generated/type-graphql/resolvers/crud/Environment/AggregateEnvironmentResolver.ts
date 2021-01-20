import * as TypeGraphQL from "type-graphql";
import { AggregateEnvironmentArgs } from "./args/AggregateEnvironmentArgs";
import { Environment } from "../../../models/Environment";
import { AggregateEnvironment } from "../../outputs/AggregateEnvironment";

@TypeGraphQL.Resolver(_of => Environment)
export class AggregateEnvironmentResolver {
  @TypeGraphQL.Query(_returns => AggregateEnvironment, {
    nullable: false,
    description: undefined
  })
  async aggregateEnvironment(@TypeGraphQL.Args() args: AggregateEnvironmentArgs): Promise<AggregateEnvironment> {
    return new AggregateEnvironment();
  }
}
