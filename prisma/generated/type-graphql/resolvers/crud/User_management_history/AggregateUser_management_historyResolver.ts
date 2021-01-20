import * as TypeGraphQL from "type-graphql";
import { AggregateUser_management_historyArgs } from "./args/AggregateUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";
import { AggregateUser_management_history } from "../../outputs/AggregateUser_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class AggregateUser_management_historyResolver {
  @TypeGraphQL.Query(_returns => AggregateUser_management_history, {
    nullable: false,
    description: undefined
  })
  async aggregateUser_management_history(@TypeGraphQL.Args() args: AggregateUser_management_historyArgs): Promise<AggregateUser_management_history> {
    return new AggregateUser_management_history();
  }
}
