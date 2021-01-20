import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationWhereUniqueInput } from "../../../inputs/AnnotationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationWhereUniqueInput, { nullable: false })
  where!: AnnotationWhereUniqueInput;
}
