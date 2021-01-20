import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationUpdateInput } from "../../../inputs/AnnotationUpdateInput";
import { AnnotationWhereUniqueInput } from "../../../inputs/AnnotationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationUpdateInput, { nullable: false })
  data!: AnnotationUpdateInput;

  @TypeGraphQL.Field(_type => AnnotationWhereUniqueInput, { nullable: false })
  where!: AnnotationWhereUniqueInput;
}
