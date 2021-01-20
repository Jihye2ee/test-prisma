import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyCreateWithoutUserInput } from "../inputs/User_signin_historyCreateWithoutUserInput";
import { User_signin_historyScalarWhereInput } from "../inputs/User_signin_historyScalarWhereInput";
import { User_signin_historyUpdateManyWithWhereNestedInput } from "../inputs/User_signin_historyUpdateManyWithWhereNestedInput";
import { User_signin_historyUpdateWithWhereUniqueWithoutUserInput } from "../inputs/User_signin_historyUpdateWithWhereUniqueWithoutUserInput";
import { User_signin_historyUpsertWithWhereUniqueWithoutUserInput } from "../inputs/User_signin_historyUpsertWithWhereUniqueWithoutUserInput";
import { User_signin_historyWhereUniqueInput } from "../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [User_signin_historyCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: User_signin_historyCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: User_signin_historyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: User_signin_historyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: User_signin_historyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: User_signin_historyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: User_signin_historyUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: User_signin_historyUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: User_signin_historyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: User_signin_historyUpsertWithWhereUniqueWithoutUserInput[] | undefined;
}
