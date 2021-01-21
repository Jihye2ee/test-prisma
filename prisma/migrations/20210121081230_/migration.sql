-- CreateTable
CREATE TABLE `annotation` (
    `seq` INT NOT NULL,
    `add_timestamp` INT NOT NULL,
    `annotation_json_payload` VARCHAR(191) NOT NULL,
    `annotation_key` VARCHAR(191) NOT NULL,
    `series_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `update_timestamp` INT NOT NULL,
    `id` VARCHAR(191) NOT NULL,
UNIQUE INDEX `annotation.annotation_key_unique`(`annotation_key`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `environment` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `item` VARCHAR(191) NOT NULL,
    `json` VARCHAR(191) NOT NULL,
    `last_update_timestamp` INT NOT NULL,
UNIQUE INDEX `environment.item_unique`(`item`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `internal_pacs_instance` (
    `seq` INT NOT NULL,
    `internal_pacs_instance_id` VARCHAR(191) NOT NULL,
    `creation_timestamp` INT NOT NULL,
    `update_timestamp` INT NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `host` VARCHAR(191) NOT NULL,
    `port` INT NOT NULL,
UNIQUE INDEX `internal_pacs_instance.internal_pacs_instance_id_unique`(`internal_pacs_instance_id`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lung_rads_report` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `is_bronchial` BOOLEAN DEFAULT false,
    `is_bronchial_text` VARCHAR(191),
    `is_induration` BOOLEAN DEFAULT false,
    `is_induration_text` VARCHAR(191),
    `is_atelectasis` BOOLEAN DEFAULT false,
    `is_atelectasis_text` VARCHAR(191),
    `is_lymph_node` BOOLEAN DEFAULT false,
    `is_lymph_node_text` VARCHAR(191),
    `is_cancer_others` BOOLEAN DEFAULT false,
    `is_cancer_others_text` VARCHAR(191),
    `is_coronary_calcification` BOOLEAN DEFAULT false,
    `selected_coronary_calcification` VARCHAR(191),
    `is_emphysema` BOOLEAN DEFAULT false,
    `is_interstitial` BOOLEAN DEFAULT false,
    `is_pneumonia` BOOLEAN DEFAULT false,
    `is_extrapulmonary` BOOLEAN DEFAULT false,
    `is_aneurysm` BOOLEAN DEFAULT false,
    `is_effusion` BOOLEAN DEFAULT false,
    `is_no_nodule_others` BOOLEAN DEFAULT false,
    `is_no_nodule_others_text` VARCHAR(191),
    `is_tuberculosis` BOOLEAN DEFAULT false,
    `is_other_diseases` BOOLEAN DEFAULT false,
    `is_other_diseases_text` VARCHAR(191),
    `final_rads_score` VARCHAR(191),
    `additional_report` VARCHAR(191),
    `lung_rads_report_result` VARCHAR(191),
UNIQUE INDEX `lung_rads_report.study_instance_uid_unique`(`study_instance_uid`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nodule_analysis_request_history` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `nodule_analysis_request_uuid` VARCHAR(191) NOT NULL,
    `series_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `result_json_data` VARCHAR(191),
    `nodule_count` INT DEFAULT 0,
    `creation_timestamp` INT NOT NULL,
    `nodule_analysis_result_receive_timestamp` INT DEFAULT 0,
    `request_user_id` VARCHAR(191) NOT NULL,
    `analysis_version` VARCHAR(191),
UNIQUE INDEX `nodule_analysis_request_history.nodule_analysis_request_uuid_uni`(`nodule_analysis_request_uuid`),
INDEX `series_uuid_defined_in_internal_pacs`(`series_uuid_defined_in_internal_pacs`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nodules` (
    `nodule_seq` INT NOT NULL AUTO_INCREMENT,
    `nodule_uuid` VARCHAR(191) NOT NULL,
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `series_instance_uid` VARCHAR(191) NOT NULL,
    `series_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `series_instance_index` INT NOT NULL,
    `sop_instance_uid` VARCHAR(191),
    `nodule_long_axis` DECIMAL(65,30) NOT NULL,
    `nodule_short_axis` DECIMAL(65,30) NOT NULL,
    `nodule_coordinate_x` INT NOT NULL,
    `nodule_coordinate_y` INT NOT NULL,
    `nodule_lesion_type` VARCHAR(191) NOT NULL,
    `nodule_status` VARCHAR(191) NOT NULL,
    `nodule_input_type` VARCHAR(191) NOT NULL,
    `nodule_info_changed_by` VARCHAR(191) NOT NULL,
    `add_timestamp` INT NOT NULL,
    `update_timestamp` INT NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `average_diameter` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `short_diameter` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `long_diameter` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `nodule_segments_info_json` VARCHAR(191) NOT NULL,
    `option1` INT NOT NULL DEFAULT 0,
    `option2` INT NOT NULL DEFAULT 0,
    `option3` INT NOT NULL DEFAULT 0,
    `option4` INT NOT NULL DEFAULT 0,
    `LungRADs` VARCHAR(191),
    `user_id` VARCHAR(191),
    `part_solid_nodule_coordinate_x` INT NOT NULL DEFAULT 0,
    `part_solid_nodule_coordinate_y` INT NOT NULL DEFAULT 0,
    `part_solid_short_diameter` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `part_solid_long_diameter` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `lobe` INT,
    `nodule_analysis_request_uuid` VARCHAR(191) NOT NULL DEFAULT '',
    `request_user_id` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `nodule_annotation_accuracy` ENUM('TRUE_POSITIVE', 'FALSE_POSITIVE', 'FALSE_NEGATIVE', ''),
    `nodule_annotation_accuracy_confirmed_user_id` VARCHAR(191),
    `nodule_annotation_accuracy_confirmed_timestamp` INT NOT NULL DEFAULT 0,
    `long_coords` VARCHAR(191),
    `short_coords` VARCHAR(191),
    `part_long_coords` VARCHAR(191),
    `part_short_coords` VARCHAR(191),
    `volume` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `part_volume` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `cavity` BOOLEAN NOT NULL DEFAULT false,
    `spiculation` BOOLEAN NOT NULL DEFAULT false,
    `isCommentNodule4X` BOOLEAN NOT NULL DEFAULT false,
    `commentNodule4X` VARCHAR(191),
    `nodule_annotation_status` VARCHAR(191),
    `analysis_version` VARCHAR(191),
UNIQUE INDEX `nodules.nodule_uuid_unique`(`nodule_uuid`),
INDEX `nodule_analysis_request_uuid`(`nodule_analysis_request_uuid`),
INDEX `nodule_id`(`nodule_seq`),
INDEX `series_id`(`series_uuid_defined_in_internal_pacs`),
INDEX `series_instance_index`(`series_instance_index`),

    PRIMARY KEY (`nodule_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `garbage_collection` (
    `seq` INT NOT NULL,
    `creation_timestamp` INT,
    `error_timestamp` INT,
    `finish_timestamp` INT,
    `retry_count` INT,
    `series_instance_uid` VARCHAR(191),
    `series_uuid_defined_in_internal_pacs` VARCHAR(191),
    `start_timestamp` INT,
    `study_instance_uid` VARCHAR(191),
    `study_uuid_defined_in_internal_pacs` VARCHAR(191),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nodule_matching` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `nodule_matching_request_uuid` VARCHAR(191) NOT NULL,
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `series_instance_uid` VARCHAR(191) NOT NULL,
    `nodule_uuid` VARCHAR(191) NOT NULL,
    `comparison_study_instance_uid` VARCHAR(191) NOT NULL,
    `comparison_series_instance_uid` VARCHAR(191) NOT NULL,
    `comparison_nodule_uuid` VARCHAR(191) NOT NULL,
    `creation_timestamp` INT NOT NULL DEFAULT 0,
    `user_id` VARCHAR(191),
    `link_status` INT NOT NULL DEFAULT 1,

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nodule_registration` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `nodule_registration_request_uuid` VARCHAR(191) NOT NULL,
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `series_instance_uid` VARCHAR(191) NOT NULL,
    `comparison_study_instance_uid` VARCHAR(191) NOT NULL,
    `comparison_series_instance_uid` VARCHAR(191) NOT NULL,
    `comparison_nodule_uuid` VARCHAR(191) NOT NULL,
    `result_matrix` VARCHAR(191) NOT NULL,
    `creation_timestamp` INT NOT NULL DEFAULT 0,

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obfuscation_data` (
    `obfuscated_data` VARCHAR(191) NOT NULL,
    `creation_time` INT,
    `original_data` VARCHAR(191),

    PRIMARY KEY (`obfuscated_data`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `patient_uuid` VARCHAR(191) NOT NULL,
    `patient_id` VARCHAR(191) NOT NULL,
    `patient_name` VARCHAR(191),
    `patient_sex` VARCHAR(191) NOT NULL,
    `creation_timestamp` INT NOT NULL,
    `patient_age` VARCHAR(191) DEFAULT '',
UNIQUE INDEX `patient.patient_uuid_unique`(`patient_uuid`),
INDEX `patient_uuid_2`(`patient_uuid`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `series` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `series_instance_uid` VARCHAR(191) NOT NULL,
    `modality` VARCHAR(191),
    `series_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `series_number` INT NOT NULL DEFAULT 0,
    `creation_timestamp` INT NOT NULL DEFAULT 0,
    `update_timestamp` INT NOT NULL DEFAULT 0,
    `series_description` VARCHAR(191) NOT NULL,
    `first_instances_uuid_defined_in_internal_pacs` VARCHAR(191) DEFAULT '',
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `nodule_count` INT NOT NULL DEFAULT 0,
    `comment` VARCHAR(191),
UNIQUE INDEX `series.series_instance_uid_unique`(`series_instance_uid`),
INDEX `series_uuid_defined_in_internal_pacs`(`series_uuid_defined_in_internal_pacs`),
INDEX `study_instance_uid`(`study_instance_uid`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `study` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `study_date` VARCHAR(191),
    `study_time` VARCHAR(191),
    `referring_physician_name` VARCHAR(191),
    `study_description` VARCHAR(191),
    `patient_uuid` VARCHAR(191) NOT NULL,
    `analysis_request_timestamp` INT NOT NULL DEFAULT 0,
    `analysis_complete_timestamp` INT NOT NULL DEFAULT 0,
    `creation_time` INT NOT NULL DEFAULT 0,
    `last_update_time` INT NOT NULL DEFAULT 0,
    `internal_pacs_instance_id` VARCHAR(191),
    `study_uuid_defined_in_internal_pacs` VARCHAR(191),
    `tags` VARCHAR(191),
    `general_user_confirmed` BOOLEAN DEFAULT false,
    `general_user_id` VARCHAR(191),
    `general_user_confirmed_timestamp` INT DEFAULT 0,
    `professor_confirmed` BOOLEAN DEFAULT false,
    `professor_id` VARCHAR(191),
    `professor_confirmed_timestamp` INT DEFAULT 0,
    `study_report` VARCHAR(191),
    `baseline` BOOLEAN DEFAULT true,
    `before_confirm_study_report` VARCHAR(191),
    `study_lung_rads` VARCHAR(191),
    `delete_confirmed_timestamp` INT NOT NULL DEFAULT 0,
    `delete_confirmed_by` VARCHAR(191),
    `delete_rollback_timestamp` INT NOT NULL DEFAULT 0,
    `study_sync_confirmed_timestamp` INT NOT NULL DEFAULT 0,
    `institution` VARCHAR(191),
UNIQUE INDEX `study.study_instance_uid_unique`(`study_instance_uid`),
INDEX `internal_pacs_instance_id`(`internal_pacs_instance_id`),
INDEX `patient_uuid`(`patient_uuid`),
INDEX `study_uuid_defined_in_internal_pacs`(`study_uuid_defined_in_internal_pacs`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `study_duplicated_by_instance_uid` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `study_instance_uid` VARCHAR(191) NOT NULL,
    `study_date` VARCHAR(191),
    `study_time` VARCHAR(191),
    `referring_physician_name` VARCHAR(191),
    `study_description` VARCHAR(191),
    `patient_uuid` VARCHAR(191) NOT NULL,
    `internal_pacs_instance_id` VARCHAR(191),
    `study_uuid_defined_in_internal_pacs` VARCHAR(191),
    `existed_study_instance_uid` VARCHAR(191) NOT NULL,
    `existed_study_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `creation_time` INT NOT NULL DEFAULT 0,
    `error_msg` VARCHAR(191) NOT NULL,
UNIQUE INDEX `study_duplicated_by_instance_uid.study_uuid_defined_in_internal_`(`study_uuid_defined_in_internal_pacs`),
INDEX `existed_study_instance_uid`(`existed_study_instance_uid`),
INDEX `existed_study_uuid_defined_in_internal_pacs`(`existed_study_uuid_defined_in_internal_pacs`),
INDEX `study_instance_uid`(`study_instance_uid`),
INDEX `study_uuid_defined_in_internal_2`(`study_uuid_defined_in_internal_pacs`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task_storage` (
    `task_uuid` VARCHAR(191) NOT NULL,
    `task_creation_timestamp` INT,
    `task_object_json_string` VARCHAR(191),
    `task_type` VARCHAR(191),

    PRIMARY KEY (`task_uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `permission` ENUM('ADMINISTRATOR', 'PHYSICIAN', 'RESTRICTED_PHYSICIAN', '') NOT NULL DEFAULT 'PHYSICIAN',
    `creation_timestamp` INT NOT NULL DEFAULT 0,
    `update_timstamp` INT NOT NULL DEFAULT 0,
    `last_password_update_timstamp` INT NOT NULL DEFAULT 0,
    `invalid_password_count` INT NOT NULL DEFAULT 0,
    `preference` VARCHAR(191),
UNIQUE INDEX `user.id_unique`(`id`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_management_history` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('CREATION', 'DELETION', 'UPDATE', 'PERMISSION_CHANGE', 'PASSWORD_LOCKED') NOT NULL,
    `timestamp` INT NOT NULL DEFAULT 0,

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_signin_history` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(191) NOT NULL,
    `session_key` VARCHAR(191) NOT NULL,
    `session_uuid` VARCHAR(191) NOT NULL,
    `sign_in_timestamp` INT NOT NULL DEFAULT 0,
    `sign_out_timestamp` INT NOT NULL DEFAULT 0,
    `heart_beat_timestamp` INT NOT NULL DEFAULT 0,
    `ip` VARCHAR(191),
INDEX `id`(`id`),

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_study_open_history` (
    `seq` INT NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(191) NOT NULL,
    `study_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `series_uuid_defined_in_internal_pacs` VARCHAR(191) NOT NULL,
    `open_request_timestamp` INT NOT NULL DEFAULT 0,

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nodules` ADD FOREIGN KEY (`nodule_analysis_request_uuid`) REFERENCES `nodule_analysis_request_history`(`nodule_analysis_request_uuid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `series` ADD FOREIGN KEY (`study_instance_uid`) REFERENCES `study`(`study_instance_uid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `study` ADD FOREIGN KEY (`internal_pacs_instance_id`) REFERENCES `internal_pacs_instance`(`internal_pacs_instance_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `study` ADD FOREIGN KEY (`patient_uuid`) REFERENCES `patient`(`patient_uuid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_signin_history` ADD FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
