import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationCreateInput } from "../../../inputs/AnnotationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationCreateInput, { nullable: false })
  data!: AnnotationCreateInput;
}
