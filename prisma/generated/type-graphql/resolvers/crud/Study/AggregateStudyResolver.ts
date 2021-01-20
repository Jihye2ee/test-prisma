import * as TypeGraphQL from "type-graphql";
import { AggregateStudyArgs } from "./args/AggregateStudyArgs";
import { Study } from "../../../models/Study";
import { AggregateStudy } from "../../outputs/AggregateStudy";

@TypeGraphQL.Resolver(_of => Study)
export class AggregateStudyResolver {
  @TypeGraphQL.Query(_returns => AggregateStudy, {
    nullable: false,
    description: undefined
  })
  async aggregateStudy(@TypeGraphQL.Args() args: AggregateStudyArgs): Promise<AggregateStudy> {
    return new AggregateStudy();
  }
}
