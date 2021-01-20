import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnnotationOrderByInput } from "../../../inputs/AnnotationOrderByInput";
import { AnnotationWhereInput } from "../../../inputs/AnnotationWhereInput";
import { AnnotationWhereUniqueInput } from "../../../inputs/AnnotationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyAnnotationArgs {
  @TypeGraphQL.Field(_type => AnnotationWhereInput, { nullable: true })
  where?: AnnotationWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnnotationOrderByInput, { nullable: true })
  orderBy?: AnnotationOrderByInput | undefined;

  @TypeGraphQL.Field(_type => AnnotationWhereUniqueInput, { nullable: true })
  cursor?: AnnotationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
