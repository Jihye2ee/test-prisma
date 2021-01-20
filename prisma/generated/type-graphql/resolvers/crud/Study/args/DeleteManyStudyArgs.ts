import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyWhereInput } from "../../../inputs/StudyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStudyArgs {
  @TypeGraphQL.Field(_type => StudyWhereInput, { nullable: true })
  where?: StudyWhereInput | undefined;
}
