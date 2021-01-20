import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationWhereInput } from "../../../inputs/AnnotationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationWhereInput, { nullable: true })
  where?: AnnotationWhereInput | undefined;
}
