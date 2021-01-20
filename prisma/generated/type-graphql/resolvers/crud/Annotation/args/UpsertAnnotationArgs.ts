import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationCreateInput } from "../../../inputs/AnnotationCreateInput";
import { AnnotationUpdateInput } from "../../../inputs/AnnotationUpdateInput";
import { AnnotationWhereUniqueInput } from "../../../inputs/AnnotationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationWhereUniqueInput, { nullable: false })
  where!: AnnotationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnnotationCreateInput, { nullable: false })
  create!: AnnotationCreateInput;

  @TypeGraphQL.Field(_type => AnnotationUpdateInput, { nullable: false })
  update!: AnnotationUpdateInput;
}
