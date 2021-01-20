import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationUpdateManyMutationInput } from "../../../inputs/AnnotationUpdateManyMutationInput";
import { AnnotationWhereInput } from "../../../inputs/AnnotationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationUpdateManyMutationInput, { nullable: false })
  data!: AnnotationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnnotationWhereInput, { nullable: true })
  where?: AnnotationWhereInput | undefined;
}
