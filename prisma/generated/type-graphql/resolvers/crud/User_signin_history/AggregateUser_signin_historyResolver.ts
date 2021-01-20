import * as TypeGraphQL from "type-graphql";
import { AggregateUser_signin_historyArgs } from "./args/AggregateUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";
import { AggregateUser_signin_history } from "../../outputs/AggregateUser_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class AggregateUser_signin_historyResolver {
  @TypeGraphQL.Query(_returns => AggregateUser_signin_history, {
    nullable: false,
    description: undefined
  })
  async aggregateUser_signin_history(@TypeGraphQL.Args() args: AggregateUser_signin_historyArgs): Promise<AggregateUser_signin_history> {
    return new AggregateUser_signin_history();
  }
}
