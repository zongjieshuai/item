ALTER TABLE `kaoshi`.`ks_question` ADD COLUMN `level` TINYINT DEFAULT 1 NOT NULL COMMENT '难易程度 1简单 2中等 3难' AFTER `is_true`, ADD COLUMN `chapter` TINYINT DEFAULT 1 NOT NULL COMMENT '章节 1-n章' AFTER `category`; 