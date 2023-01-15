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
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `firstname` (`firstname`),
  KEY `middlename` (`middlename`),
  KEY `lastname` (`lastname`),
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `gender` (`gender`),
  KEY `address` (`address`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.advisers: ~2 rows (approximately)
INSERT INTO `advisers` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `address`, `status`, `created_at`, `updated_at`) VALUES
	(1, 'John', 'Dummy', 'Doe', 'Male', 'Tagbilaran', 'active', '2022-12-16 04:20:05', '2022-12-16 04:20:05'),
	(5, 'Kim', 'sdfsdfdsf', 'Orilla', 'Female', 'Haguilanan Grande, Balilihan, Bohol', 'active', '2022-12-21 04:18:24', '2022-12-21 04:18:24'),
	(10, 'Jane', 'Dummy', 'Smith', 'Female', 'Bohol', 'active', '2023-01-03 14:04:20', '2023-01-03 14:04:20');

-- Dumping structure for table carrms.enrollment_head
CREATE TABLE IF NOT EXISTS `enrollment_head` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sy_id` int(11) NOT NULL,
  `adviser_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `updated_at` (`updated_at`) USING BTREE,
  KEY `firstname` (`adviser_id`) USING BTREE,
  KEY `sy_id` (`sy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.enrollment_head: ~2 rows (approximately)
INSERT INTO `enrollment_head` (`id`, `sy_id`, `adviser_id`, `section_id`, `created_at`, `updated_at`) VALUES
	(58, 13, 1, 1, '2023-01-15 12:54:56', '2023-01-15 12:54:56'),
	(61, 17, 1, 1, '2023-01-15 14:32:37', '2023-01-15 14:32:37');

-- Dumping structure for table carrms.enrollment_line
CREATE TABLE IF NOT EXISTS `enrollment_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `head_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `final_remarks` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `updated_at` (`updated_at`) USING BTREE,
  KEY `student_id` (`student_id`),
  KEY `head_id` (`head_id`),
  KEY `final_remarks` (`final_remarks`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.enrollment_line: ~2 rows (approximately)
INSERT INTO `enrollment_line` (`id`, `head_id`, `student_id`, `final_remarks`, `created_at`, `updated_at`) VALUES
	(85, 58, 3, 'failed', '2023-01-15 12:54:56', '2023-01-15 13:34:28'),
	(88, 61, 5, 'pending', '2023-01-15 14:32:37', '2023-01-15 14:32:37');

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
  `status` float NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `updated_at` (`updated_at`) USING BTREE,
  KEY `firstname` (`sy`) USING BTREE,
  KEY `middlename` (`status`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.schoolyears: ~1 rows (approximately)
INSERT INTO `schoolyears` (`id`, `sy`, `status`, `created_at`, `updated_at`) VALUES
	(13, '2022-2023', 0, '2023-01-03 11:43:40', '2023-01-15 12:56:44'),
	(17, '2023-2024', 1, '2023-01-15 12:56:44', '2023-01-15 12:56:44');

-- Dumping structure for table carrms.sections
CREATE TABLE IF NOT EXISTS `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(11) NOT NULL DEFAULT 1,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adviser_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `updated_at` (`updated_at`) USING BTREE,
  KEY `middlename` (`section`) USING BTREE,
  KEY `firstname` (`grade`) USING BTREE,
  KEY `level` (`level`),
  KEY `order` (`order`),
  KEY `adviser_id` (`adviser_id`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.sections: ~15 rows (approximately)
INSERT INTO `sections` (`id`, `order`, `grade`, `level`, `section`, `adviser_id`, `status`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Preschool', 'Preschool', '1', 1, 1, '2022-12-16 04:20:05', '2023-01-12 22:18:12'),
	(12, 4, 'Grade 7', 'Junior High', '1', 10, 1, '2022-12-21 02:42:47', '2023-01-03 15:19:10'),
	(13, 4, 'Grade 8', 'Junior High', '1', 1, 1, '2022-12-21 02:42:47', '2023-01-12 22:24:11'),
	(14, 4, 'Grade 9', 'Junior High', '1', 10, 1, '2022-12-21 02:42:47', '2023-01-12 22:24:14'),
	(15, 4, 'Grade 10', 'Junior High', '1', 10, 1, '2022-12-21 02:42:47', '2023-01-12 22:24:16'),
	(18, 2, 'Kinder 1', 'Kinder', '1', 10, 1, '2022-12-16 04:20:05', '2023-01-12 22:28:15'),
	(30, 5, 'Grade 12', 'Senior High', '1', 5, 1, '2023-01-03 12:24:17', '2023-01-12 23:29:50'),
	(31, 5, 'Grade 11', 'Senior High', '1', 5, 1, '2023-01-13 01:47:11', '2023-01-13 01:47:29'),
	(32, 2, 'Kinder 2', 'Kinder', '1', 10, 1, '2023-01-15 07:17:28', '2023-01-15 07:17:57'),
	(33, 3, 'Grade 1', 'Elementary', '1', 5, 1, '2023-01-15 08:40:39', '2023-01-15 08:41:08'),
	(34, 3, 'Grade 2', 'Elementary', '1', 5, 1, '2023-01-15 08:40:44', '2023-01-15 08:41:09'),
	(35, 3, 'Grade 3', 'Elementary', '1', 5, 1, '2023-01-15 08:40:47', '2023-01-15 08:41:10'),
	(36, 3, 'Grade 4', 'Elementary', '1', 5, 1, '2023-01-15 08:40:50', '2023-01-15 08:41:12'),
	(37, 3, 'Grade 5', 'Elementary', '1', 5, 1, '2023-01-15 08:40:53', '2023-01-15 08:41:12'),
	(38, 3, 'Grade 6', 'Elementary', '1', 5, 1, '2023-01-15 08:40:56', '2023-01-15 08:41:14'),
	(39, 4, 'Grade 8', 'Junior High', '2', 1, 1, '2023-01-15 12:06:13', '2023-01-15 12:07:14');

-- Dumping structure for table carrms.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `current_grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `prev_grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
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
  KEY `created_at` (`created_at`),
  KEY `updated_at` (`updated_at`),
  KEY `lrn` (`lrn`),
  KEY `current_grade` (`current_grade`),
  KEY `prev_grade` (`prev_grade`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.students: ~7 rows (approximately)
INSERT INTO `students` (`id`, `lrn`, `firstname`, `middlename`, `lastname`, `extname`, `gender`, `dob`, `pob`, `address`, `guardian`, `guardian_address`, `current_grade`, `prev_grade`, `created_at`, `updated_at`) VALUES
	(3, '', 'test', 'test', 'test', NULL, 'Male', '2003-06-05', 'test', 'test', 'test', 'test', 'Preschool', '', '2022-12-16 03:11:24', '2023-01-15 12:54:56'),
	(5, '', 'Juan', 'Test', 'Dela Cruz', 'Jr', 'Male', '1992-05-16', 'Test Place, 123 Test', 'Test Place, 123 Test', 'Maria Clara', 'Test Place, 123 Test', 'Preschool', '', '2022-12-16 03:20:10', '2023-01-15 14:32:37'),
	(9, '', 'sdf', 'sdf', 'sdf', NULL, 'Male', '2021-03-05', 'sdf', 'sdf', 'sdf', 'sdf', 'Kinder 2', '', '2022-12-21 05:01:46', '2023-01-15 11:58:25'),
	(11, NULL, 'Bob', 'Smith', 'Mitchel', NULL, 'Male', '1997-06-12', 'Philippines', 'Philippines', 'NA', 'NA', 'Kinder 2', '', '2023-01-15 03:14:19', '2023-01-15 11:50:05'),
	(12, '111', 'Mike', 'Swift', 'Otwell', NULL, 'Male', '1997-05-06', 'Bohol, Philippines', 'Bohol, Philippines', 'NA', 'NA', 'Preschool', '', '2023-01-15 03:15:25', '2023-01-15 11:56:37'),
	(13, '222', 'Taylor', 'Otwell', 'Otwell', NULL, 'Male', '1983-02-02', 'test', 'test', 'test', 'test', 'Preschool', '', '2023-01-15 03:16:06', '2023-01-15 11:56:37'),
	(14, '101', 'Kael', 'Bradd', 'Williams', NULL, 'Male', '1996-08-08', 'Bohol', 'Bohol', 'NA', 'NA', 'Grade 8', '', '2023-01-15 12:09:04', '2023-01-15 12:10:16');

-- Dumping structure for table carrms.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `created_at` (`created_at`) USING BTREE,
  KEY `updated_at` (`updated_at`) USING BTREE,
  KEY `firstname` (`grade`) USING BTREE,
  KEY `subject_name` (`subject_name`),
  KEY `subject_description` (`subject_description`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table carrms.subjects: ~7 rows (approximately)
INSERT INTO `subjects` (`id`, `grade`, `subject_name`, `subject_description`, `created_at`, `updated_at`) VALUES
	(32, 'Grade 1', 'English 1', 'test', '2023-01-03 12:51:09', '2023-01-03 12:51:09'),
	(35, 'Grade 1', 'Math 1', 'test test', '2023-01-03 12:52:20', '2023-01-03 12:52:20'),
	(36, 'Grade 2', 'English 2', 'test', '2023-01-03 12:52:29', '2023-01-03 12:52:29'),
	(38, 'Grade 1', 'Test Subject 1', 'Test Subject 1', '2023-01-12 20:09:43', '2023-01-12 20:09:43'),
	(39, 'Grade 12', 'Gdfsdf sdfsdf', 'Gdfsdf sdfsdf', '2023-01-12 20:28:10', '2023-01-12 20:28:10'),
	(40, 'Grade 11', 'dddd dddd dddd', 'dddd dddd dddd', '2023-01-12 20:28:33', '2023-01-12 20:28:33'),
	(41, 'Preschool', 'teeeeeeeeeeest', 'teeeeeeeeeeest', '2023-01-12 20:59:28', '2023-01-12 20:59:28');

-- Dumping structure for table carrms.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
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
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table carrms.users: ~2 rows (approximately)
INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `password`, `user_type`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Test Admin', 'admin', 'admin@test.com', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
	(2, 'Super Admin', 'super', '', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'super_admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
	(5, 'AdviserTest', 'adviser', NULL, NULL, '$2y$10$5o3wNl9HnQq953zzxlifF.PI46FiX4Yu4TqJDXVEGYYt/aV/gikpW', 'adviser', NULL, '2022-12-20 21:44:43', '2022-12-20 21:44:44'),
	(6, 'Jane Dummy Smith', 'janedummy', NULL, NULL, '$2y$10$gYH85JQSLneALF0kTnyYLue39uWwltIKp5.libdZUct9QHBbBlif6', 'adviser', NULL, '2023-01-03 06:04:20', '2023-01-03 06:04:20');

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
