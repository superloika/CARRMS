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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.advisers: ~2 rows (approximately)
INSERT INTO `advisers` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `address`, `status`, `created_at`, `updated_at`) VALUES
	(11, 'Kim', 'Kimmy', 'Kimmytest', 'Female', 'Haguilanan Grande, Balilihan, Bohol', 1, '2023-01-17 04:45:11', '2023-01-17 04:52:25'),
	(12, 'Jane', 'Smith', 'Doe', 'Female', 'Bohol', 1, '2023-01-17 05:12:08', '2023-01-17 05:12:08');

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
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.enrollment_head: ~4 rows (approximately)
INSERT INTO `enrollment_head` (`id`, `sy_id`, `adviser_id`, `section_id`, `created_at`, `updated_at`) VALUES
	(79, 22, 11, 1, '2023-01-17 05:13:11', '2023-01-17 05:13:11'),
	(80, 22, 12, 18, '2023-01-17 05:19:14', '2023-01-17 05:19:14'),
	(81, 22, 12, 32, '2023-01-17 05:20:10', '2023-01-17 05:20:10'),
	(82, 22, 11, 33, '2023-01-17 09:36:28', '2023-01-17 09:36:28');

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
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.enrollment_line: ~18 rows (approximately)
INSERT INTO `enrollment_line` (`id`, `head_id`, `student_id`, `strand_id`, `final_remarks`) VALUES
	(135, 77, 15, 0, 'pending'),
	(136, 78, 3, 0, 'pending'),
	(137, 78, 5, 0, 'pending'),
	(138, 78, 9, 0, 'pending'),
	(139, 78, 11, 0, 'pending'),
	(140, 78, 12, 0, 'pending'),
	(141, 78, 13, 0, 'pending'),
	(142, 78, 14, 0, 'pending'),
	(143, 79, 15, 0, 'pending'),
	(144, 80, 1, 0, 'pending'),
	(145, 81, 16, 0, 'pending'),
	(146, 82, 3, 0, 'pending'),
	(147, 82, 5, 0, 'pending'),
	(148, 82, 9, 0, 'pending'),
	(149, 82, 11, 0, 'pending'),
	(150, 82, 12, 0, 'pending'),
	(151, 82, 13, 0, 'pending'),
	(152, 82, 14, 0, 'pending');

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.schoolyears: ~1 rows (approximately)
INSERT INTO `schoolyears` (`id`, `sy`, `status`, `created_at`, `updated_at`) VALUES
	(22, '2022-2023', 1, '2023-01-17 05:02:12', '2023-01-17 05:02:12');

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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.sections: ~17 rows (approximately)
INSERT INTO `sections` (`id`, `order`, `grade`, `level`, `section`, `adviser_id`, `status`) VALUES
	(1, 1, 'Nursery', 'Nursery', '1', 11, 1),
	(12, 4, 'Grade 7', 'Junior High', '1', 11, 1),
	(13, 4, 'Grade 8', 'Junior High', '1', 11, 1),
	(14, 4, 'Grade 9', 'Junior High', '1', 11, 1),
	(15, 4, 'Grade 10', 'Junior High', '1', 11, 1),
	(18, 2, 'Kinder 1', 'Kinder', '1', 12, 1),
	(30, 5, 'Grade 12', 'Senior High', '1', 11, 1),
	(31, 5, 'Grade 11', 'Senior High', '1', 11, 1),
	(32, 2, 'Kinder 2', 'Kinder', '1', 12, 1),
	(33, 3, 'Grade 1', 'Elementary', '1', 11, 1),
	(34, 3, 'Grade 2', 'Elementary', '1', 11, 1),
	(35, 3, 'Grade 3', 'Elementary', '1', 11, 1),
	(36, 3, 'Grade 4', 'Elementary', '1', 11, 1),
	(37, 3, 'Grade 5', 'Elementary', '1', 11, 1),
	(38, 3, 'Grade 6', 'Elementary', '1', 11, 1),
	(39, 4, 'Grade 8', 'Junior High', '2', 11, 1),
	(40, 1, 'Nursery', 'Nursery', '2', 11, 1);

-- Dumping structure for table carrms.strands
CREATE TABLE IF NOT EXISTS `strands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strand_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `strand_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `strand_name` (`strand_name`),
  KEY `strand_description` (`strand_description`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.strands: ~2 rows (approximately)
INSERT INTO `strands` (`id`, `strand_name`, `strand_description`) VALUES
	(1, 'HUMSS', 'HUMANITIES AND SOCIAL SCIENCES'),
	(2, 'ABM', 'ACOUNTANCY AND BUSINESS MANAGEMENT');

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.students: ~10 rows (approximately)
INSERT INTO `students` (`id`, `lrn`, `firstname`, `middlename`, `lastname`, `extname`, `gender`, `dob`, `pob`, `address`, `guardian`, `guardian_address`, `is_enrolled`, `current_grade`, `last_syid`, `last_grade`, `last_final_remarks`, `created_at`, `updated_at`) VALUES
	(1, '1010101', 'Rasmus', 'Chase', 'Lerdorf', NULL, 'Male', '1996-08-21', 'Bohol, Philippines', 'Bohol, Philippines', 'NA', 'NA', 1, '', NULL, '', '', '2023-01-17 05:08:00', '2023-01-17 05:19:14'),
	(3, '', 'test', 'test', 'test', NULL, 'Male', '2003-06-05', 'test', 'test', 'test', 'test', 1, '', 0, '', '', '2022-12-16 03:11:24', '2023-01-17 09:36:28'),
	(5, '', 'Juan', 'Test', 'Dela Cruz', 'Jr', 'Male', '1992-05-16', 'Test Place, 123 Test', 'Test Place, 123 Test', 'Maria Clara', 'Test Place, 123 Test', 1, '', 0, '', '', '2022-12-16 03:20:10', '2023-01-17 09:36:28'),
	(9, '', 'sdf', 'sdf', 'sdf', NULL, 'Male', '2021-03-05', 'sdf', 'sdf', 'sdf', 'sdf', 1, '', 0, '', '', '2022-12-21 05:01:46', '2023-01-17 09:36:28'),
	(11, NULL, 'Bob', 'Smith', 'Mitchel', NULL, 'Male', '1997-06-12', 'Philippines', 'Philippines', 'NA', 'NA', 1, '', 0, '', '', '2023-01-15 03:14:19', '2023-01-17 09:36:28'),
	(12, '111', 'Mike', 'Swift', 'Otwell', NULL, 'Male', '1997-05-06', 'Bohol, Philippines', 'Bohol, Philippines', 'NA', 'NA', 1, '', 0, '', '', '2023-01-15 03:15:25', '2023-01-17 09:36:28'),
	(13, '222', 'Taylor', 'Otwell', 'Otwell', NULL, 'Male', '1983-02-02', 'test', 'test', 'test', 'test', 1, '', 0, '', '', '2023-01-15 03:16:06', '2023-01-17 09:36:28'),
	(14, '101', 'Kael', 'Bradd', 'Williams', NULL, 'Male', '1996-08-08', 'Bohol', 'Bohol', 'NA', 'NA', 1, '', 0, '', '', '2023-01-15 12:09:04', '2023-01-17 09:36:28'),
	(15, '1011', 'Vina', 'Mae', 'Rebusa', NULL, 'Female', '1994-10-21', 'Bohol', 'Bohol', 'NA', 'NA', 1, '', 0, '', '', '2023-01-17 01:17:12', '2023-01-17 05:13:11'),
	(16, '222333', 'xxx', 'xxx', 'xxx', NULL, 'Male', '2022-02-02', 'xxx', 'xxx', 'xxx', 'xxx', 1, '', NULL, '', '', '2023-01-17 05:10:57', '2023-01-17 05:20:10');

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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.subjects: ~2 rows (approximately)
INSERT INTO `subjects` (`id`, `subject_code`, `subject_name`, `subject_description`, `subject_type`) VALUES
	(43, 'test1', 'Test 1', 'Test 1 description', NULL),
	(45, 'ORALCOM', 'Oral Communication', 'Oral Communication', 'Core');

-- Dumping structure for table carrms.subtags
CREATE TABLE IF NOT EXISTS `subtags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_id` int(11) NOT NULL,
  `strand_id` int(11) DEFAULT NULL,
  `sem` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.subtags: ~4 rows (approximately)
INSERT INTO `subtags` (`id`, `grade`, `level`, `subject_id`, `strand_id`, `sem`) VALUES
	(43, 'Kinder 1', 'Kinder', 43, NULL, NULL),
	(46, 'Grade 10', 'Junior High', 43, NULL, NULL),
	(47, 'Grade 11', 'Senior High', 45, 1, 1),
	(48, 'Grade 12', 'Senior High', 45, 1, 2);

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.users: ~3 rows (approximately)
INSERT INTO `users` (`id`, `adviser_id`, `name`, `username`, `email`, `email_verified_at`, `password`, `user_type`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, NULL, 'Test Admin', 'admin', 'admin@test.com', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
	(2, NULL, 'Super Admin', 'super', '', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'super_admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
	(7, 11, 'Kim Kimmy Kimmytest', 'kimkimmytest', NULL, NULL, '$2y$10$D0oqPf0GsSidTCebHlWwhukKf8Vt/k8Kvn2.bRo9amtpZlqgqVSii', 'adviser', NULL, '2023-01-16 20:45:11', '2023-01-16 20:45:11'),
	(8, 12, 'Jane Smith Doe', 'janedoe', NULL, NULL, '$2y$10$BLKumL1dOScwi3cMRB3bVOsUyhuOOFZLUEBFn1DjOHJxp3PyPbBPu', 'adviser', NULL, '2023-01-16 21:12:08', '2023-01-16 21:12:08');

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
