import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { PatientCreateWithoutStudyInput } from "../inputs/PatientCreateWithoutStudyInput";
import { PatientUpdateWithoutStudyDataInput } from "../inputs/PatientUpdateWithoutStudyDataInput";
import { PatientUpsertWithoutStudyInput } from "../inputs/PatientUpsertWithoutStudyInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientUpdateOneRequiredWithoutStudyInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  create?: PatientCreateWithoutStudyInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutStudyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PatientUpdateWithoutStudyDataInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PatientUpsertWithoutStudyInput | undefined;
}
