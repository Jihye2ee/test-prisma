import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyCreateInput } from "../../../inputs/StudyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudyArgs {
  @TypeGraphQL.Field(_type => StudyCreateInput, { nullable: false })
  data!: StudyCreateInput;
}
