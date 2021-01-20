import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyUpdateInput } from "../../../inputs/StudyUpdateInput";
import { StudyWhereUniqueInput } from "../../../inputs/StudyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStudyArgs {
  @TypeGraphQL.Field(_type => StudyUpdateInput, { nullable: false })
  data!: StudyUpdateInput;

  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, { nullable: false })
  where!: StudyWhereUniqueInput;
}
