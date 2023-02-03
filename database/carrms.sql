-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.25-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table carrms.advisers
CREATE TABLE IF NOT EXISTS `advisers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middlename` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `firstname` (`firstname`),
  KEY `middlename` (`middlename`),
  KEY `lastname` (`lastname`),
  KEY `gender` (`gender`),
  KEY `address` (`address`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.advisers: ~0 rows (approximately)
INSERT INTO `advisers` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `address`, `status`, `created_at`, `updated_at`) VALUES
	(17, 'Sample', 'Adviser', 'Adviser One', 'Female', 'Bohol', 1, '2023-02-03 03:02:12', '2023-02-03 03:02:12');

-- Dumping structure for table carrms.defaults
CREATE TABLE IF NOT EXISTS `defaults` (
  `id` int(11) NOT NULL,
  `setting_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `setting_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.defaults: ~1 rows (approximately)
INSERT INTO `defaults` (`id`, `setting_name`, `setting_value`) VALUES
	(1, 'passing_grade', '75');

-- Dumping structure for table carrms.enrollment_head
CREATE TABLE IF NOT EXISTS `enrollment_head` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sy_id` int(11) NOT NULL,
  `adviser_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `sy_id` (`sy_id`),
  KEY `adviser_id` (`adviser_id`),
  KEY `section_id` (`section_id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.enrollment_head: ~0 rows (approximately)
INSERT INTO `enrollment_head` (`id`, `sy_id`, `adviser_id`, `section_id`, `created_at`, `updated_at`) VALUES
	(93, 25, 17, 42, '2023-02-03 03:58:00', '2023-02-03 03:58:00');

-- Dumping structure for table carrms.enrollment_line
CREATE TABLE IF NOT EXISTS `enrollment_line` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `head_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `strand_id` int(11) DEFAULT NULL,
  `final_remarks` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `head_id` (`head_id`),
  KEY `student_id` (`student_id`),
  KEY `final_remarks` (`final_remarks`),
  KEY `strand_id` (`strand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.enrollment_line: ~0 rows (approximately)
INSERT INTO `enrollment_line` (`id`, `head_id`, `student_id`, `strand_id`, `final_remarks`) VALUES
	(189, 93, 17, NULL, 'pending');

-- Dumping structure for table carrms.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table carrms.gradelevels
CREATE TABLE IF NOT EXISTS `gradelevels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `grade` (`grade`),
  KEY `level` (`level`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.gradelevels: ~13 rows (approximately)
INSERT INTO `gradelevels` (`id`, `grade`, `level`) VALUES
	(1, 'Nursery', 'Nursery'),
	(2, 'Kinder 1', 'Kinder'),
	(3, 'Kinder 2', 'Kinder'),
	(4, 'Grade 1', 'Elementary'),
	(5, 'Grade 2', 'Elementary'),
	(6, 'Grade 3', 'Elementary'),
	(7, 'Grade 4', 'Elementary'),
	(8, 'Grade 5', 'Elementary'),
	(9, 'Grade 6', 'Elementary'),
	(10, 'Grade 7', 'Junior High'),
	(11, 'Grade 8', 'Junior High'),
	(12, 'Grade 9', 'Junior High'),
	(13, 'Grade 10', 'Junior High'),
	(14, 'Grade 11', 'Senior High'),
	(15, 'Grade 12', 'Senior High');

-- Dumping structure for table carrms.grades
CREATE TABLE IF NOT EXISTS `grades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `enrollment_line_id` bigint(20) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `sem` tinyint(4) DEFAULT NULL,
  `first` float DEFAULT NULL,
  `second` float DEFAULT NULL,
  `third` float DEFAULT NULL,
  `fourth` float DEFAULT NULL,
  `final` float DEFAULT NULL,
  `remarks` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `enrollment_line_id` (`enrollment_line_id`),
  KEY `subject_id` (`subject_id`),
  KEY `sem` (`sem`),
  KEY `first` (`first`),
  KEY `second` (`second`),
  KEY `third` (`third`),
  KEY `fourth` (`fourth`),
  KEY `final` (`final`),
  KEY `remarks` (`remarks`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.grades: ~1 rows (approximately)
INSERT INTO `grades` (`id`, `enrollment_line_id`, `subject_id`, `sem`, `first`, `second`, `third`, `fourth`, `final`, `remarks`, `created_at`, `updated_at`) VALUES
	(118, 189, 51, NULL, 90, 89, 89, 90, 89.5, 'PASSED', '2023-02-03 03:58:00', '2023-02-03 04:04:41');

-- Dumping structure for table carrms.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.migrations: ~4 rows (approximately)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '0000_00_00_000000_create_websockets_statistics_entries_table', 1),
	(2, '2014_10_12_000000_create_users_table', 1),
	(3, '2014_10_12_100000_create_password_resets_table', 1),
	(4, '2019_08_19_000000_create_failed_jobs_table', 1);

-- Dumping structure for table carrms.notifications
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sy_id` tinyint(4) NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.notifications: ~0 rows (approximately)
INSERT INTO `notifications` (`id`, `sy_id`, `message`, `status`, `created_at`, `updated_at`) VALUES
	(123, 25, 'Sample Adviser One updated Jane Smith\'s grade', 1, '2023-02-03 04:04:41', '2023-02-03 04:05:07');

-- Dumping structure for table carrms.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.password_resets: ~0 rows (approximately)

-- Dumping structure for table carrms.schoolyears
CREATE TABLE IF NOT EXISTS `schoolyears` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sy` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `sy` (`sy`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.schoolyears: ~0 rows (approximately)
INSERT INTO `schoolyears` (`id`, `sy`, `status`, `created_at`, `updated_at`) VALUES
	(25, '2022-2023', 1, '2023-02-03 02:35:43', '2023-02-03 02:35:43');

-- Dumping structure for table carrms.sections
CREATE TABLE IF NOT EXISTS `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(11) NOT NULL DEFAULT 1,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adviser_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `grade` (`grade`),
  KEY `level` (`level`),
  KEY `section` (`section`),
  KEY `adviser_id` (`adviser_id`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.sections: ~3 rows (approximately)
INSERT INTO `sections` (`id`, `order`, `grade`, `level`, `section`, `adviser_id`, `status`) VALUES
	(42, 3, 'Grade 1', 'Elementary', '1', 17, 1),
	(43, 3, 'Grade 2', 'Elementary', '1', 17, 1),
	(44, 3, 'Grade 3', 'Elementary', '1', 17, 1);

-- Dumping structure for table carrms.strands
CREATE TABLE IF NOT EXISTS `strands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strand_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `strand_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `strand_name` (`strand_name`),
  KEY `strand_description` (`strand_description`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.strands: ~0 rows (approximately)

-- Dumping structure for table carrms.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `lrn` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middlename` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `pob` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guardian` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guardian_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_enrolled` tinyint(4) NOT NULL DEFAULT 0,
  `current_grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `last_syid` int(11) DEFAULT NULL,
  `last_grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `last_final_remarks` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `lrn` (`lrn`),
  KEY `firstname` (`firstname`),
  KEY `middlename` (`middlename`),
  KEY `lastname` (`lastname`),
  KEY `extname` (`extname`),
  KEY `gender` (`gender`),
  KEY `dob` (`dob`),
  KEY `pob` (`pob`),
  KEY `address` (`address`),
  KEY `guardian` (`guardian`),
  KEY `guardian_address` (`guardian_address`),
  KEY `is_enrolled` (`is_enrolled`),
  KEY `current_grade` (`current_grade`),
  KEY `last_syid` (`last_syid`),
  KEY `last_grade` (`last_grade`),
  KEY `last_final_remarks` (`last_final_remarks`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.students: ~1 rows (approximately)
INSERT INTO `students` (`id`, `lrn`, `firstname`, `middlename`, `lastname`, `extname`, `gender`, `dob`, `pob`, `address`, `guardian`, `guardian_address`, `is_enrolled`, `current_grade`, `last_syid`, `last_grade`, `last_final_remarks`, `created_at`, `updated_at`) VALUES
	(17, '12345', 'Jane', 'Dummy', 'Smith', NULL, 'Female', '1995-05-04', 'Philippines', 'Philippines', 'NA', 'NA', 1, '', NULL, '', '', '2023-02-03 02:36:44', '2023-02-03 03:58:00');

-- Dumping structure for table carrms.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `subject_code` (`subject_code`),
  KEY `subject_name` (`subject_name`),
  KEY `subject_description` (`subject_description`),
  KEY `subject_type` (`subject_type`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.subjects: ~2 rows (approximately)
INSERT INTO `subjects` (`id`, `subject_code`, `subject_name`, `subject_description`, `subject_type`) VALUES
	(51, 's1', 'Subject 1', 'Subject 1', NULL),
	(52, 's2', 'Subject 2', 'Subject 2', NULL),
	(53, 's3', 'Subject 3', 'Subject 3', NULL);

-- Dumping structure for table carrms.subtags
CREATE TABLE IF NOT EXISTS `subtags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_id` int(11) NOT NULL,
  `strand_id` int(11) DEFAULT NULL,
  `sem` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `grade` (`grade`),
  KEY `level` (`level`),
  KEY `subject_id` (`subject_id`),
  KEY `strand_id` (`strand_id`),
  KEY `sem` (`sem`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.subtags: ~2 rows (approximately)
INSERT INTO `subtags` (`id`, `grade`, `level`, `subject_id`, `strand_id`, `sem`) VALUES
	(78, 'Grade 1', 'Elementary', 51, NULL, NULL),
	(79, 'Grade 2', 'Elementary', 52, NULL, NULL),
	(80, 'Grade 3', 'Elementary', 53, NULL, NULL);

-- Dumping structure for table carrms.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `adviser_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `adviser_id` (`adviser_id`),
  KEY `name` (`name`),
  KEY `password` (`password`),
  KEY `email_verified_at` (`email_verified_at`),
  KEY `user_type` (`user_type`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.users: ~3 rows (approximately)
INSERT INTO `users` (`id`, `adviser_id`, `name`, `username`, `email`, `email_verified_at`, `password`, `user_type`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, NULL, 'Test Admin', 'admin', 'admin@test.com', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
	(2, NULL, 'Super Admin', 'super', '', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'super_admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
	(13, 17, 'Sample Adviser Adviser One', 'sampleadviserone', NULL, NULL, '$2y$10$wQ1fBVNYF442EempfCrAlOi9m8PGsOrH0DKbDVcZCRGXGKdlVpEJi', 'adviser', NULL, '2023-02-02 19:02:12', '2023-02-02 19:02:12');

-- Dumping structure for table carrms.websockets_statistics_entries
CREATE TABLE IF NOT EXISTS `websockets_statistics_entries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `app_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.websockets_statistics_entries: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
