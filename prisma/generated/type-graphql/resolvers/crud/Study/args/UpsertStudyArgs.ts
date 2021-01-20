import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyCreateInput } from "../../../inputs/StudyCreateInput";
import { StudyUpdateInput } from "../../../inputs/StudyUpdateInput";
import { StudyWhereUniqueInput } from "../../../inputs/StudyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStudyArgs {
  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, { nullable: false })
  where!: StudyWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyCreateInput, { nullable: false })
  create!: StudyCreateInput;

  @TypeGraphQL.Field(_type => StudyUpdateInput, { nullable: false })
  update!: StudyUpdateInput;
}
