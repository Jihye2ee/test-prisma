import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyOrderByInput } from "../../../inputs/StudyOrderByInput";
import { StudyWhereInput } from "../../../inputs/StudyWhereInput";
import { StudyWhereUniqueInput } from "../../../inputs/StudyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyStudyArgs {
  @TypeGraphQL.Field(_type => StudyWhereInput, { nullable: true })
  where?: StudyWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudyOrderByInput, { nullable: true })
  orderBy?: StudyOrderByInput | undefined;

  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, { nullable: true })
  cursor?: StudyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
