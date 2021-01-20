import * as TypeGraphQL from "type-graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";

@TypeGraphQL.Resolver(_of => User)
export class AggregateUserResolver {
  @TypeGraphQL.Query(_returns => AggregateUser, {
    nullable: false,
    description: undefined
  })
  async aggregateUser(@TypeGraphQL.Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return new AggregateUser();
  }
}
