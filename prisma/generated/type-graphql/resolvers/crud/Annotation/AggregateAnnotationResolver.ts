import * as TypeGraphQL from "type-graphql";
import { AggregateAnnotationArgs } from "./args/AggregateAnnotationArgs";
import { Annotation } from "../../../models/Annotation";
import { AggregateAnnotation } from "../../outputs/AggregateAnnotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class AggregateAnnotationResolver {
  @TypeGraphQL.Query(_returns => AggregateAnnotation, {
    nullable: false,
    description: undefined
  })
  async aggregateAnnotation(@TypeGraphQL.Args() args: AggregateAnnotationArgs): Promise<AggregateAnnotation> {
    return new AggregateAnnotation();
  }
}
