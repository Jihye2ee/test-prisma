import * as TypeGraphQL from "type-graphql";
import { AggregateUser_study_open_historyArgs } from "./args/AggregateUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";
import { AggregateUser_study_open_history } from "../../outputs/AggregateUser_study_open_history";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class AggregateUser_study_open_historyResolver {
  @TypeGraphQL.Query(_returns => AggregateUser_study_open_history, {
    nullable: false,
    description: undefined
  })
  async aggregateUser_study_open_history(@TypeGraphQL.Args() args: AggregateUser_study_open_historyArgs): Promise<AggregateUser_study_open_history> {
    return new AggregateUser_study_open_history();
  }
}
