import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudyUpdateManyMutationInput } from "../../../inputs/StudyUpdateManyMutationInput";
import { StudyWhereInput } from "../../../inputs/StudyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStudyArgs {
  @TypeGraphQL.Field(_type => StudyUpdateManyMutationInput, { nullable: false })
  data!: StudyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StudyWhereInput, { nullable: true })
  where?: StudyWhereInput | undefined;
}
