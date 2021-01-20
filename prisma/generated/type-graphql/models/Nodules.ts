import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../node_modules/@prisma/client";
import { Nodule_analysis_request_history } from "../models/Nodule_analysis_request_history";
import { nodules_nodule_annotation_accuracy } from "../enums/nodules_nodule_annotation_accuracy";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Nodules {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  nodule_seq!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  study_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  series_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  series_uuid_defined_in_internal_pacs!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  series_instance_index!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  sop_instance_uid?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  nodule_long_axis!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  nodule_short_axis!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  nodule_coordinate_x!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  nodule_coordinate_y!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_lesion_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_input_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_info_changed_by!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  add_timestamp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  update_timestamp!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  comment!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  average_diameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  short_diameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  long_diameter!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_segments_info_json!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  option1!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  option2!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  option3!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  option4!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  LungRADs?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  user_id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  part_solid_nodule_coordinate_x!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  part_solid_nodule_coordinate_y!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  part_solid_short_diameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  part_solid_long_diameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  lobe?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  nodule_analysis_request_uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  request_user_id!: string;

  @TypeGraphQL.Field(_type => nodules_nodule_annotation_accuracy, {
    nullable: true,
    description: undefined,
  })
  nodule_annotation_accuracy?: keyof typeof nodules_nodule_annotation_accuracy | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  nodule_annotation_accuracy_confirmed_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  nodule_annotation_accuracy_confirmed_timestamp!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  long_coords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  short_coords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  part_long_coords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  part_short_coords?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  volume!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  part_volume!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  cavity!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  spiculation!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  isCommentNodule4X!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  commentNodule4X?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  nodule_annotation_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  analysis_version?: string | undefined;

  nodule_analysis_request_history?: Nodule_analysis_request_history;
}
