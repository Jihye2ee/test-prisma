import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyWhereUniqueInput } from "../../../inputs/StudyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStudyArgs {
  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, { nullable: false })
  where!: StudyWhereUniqueInput;
}
