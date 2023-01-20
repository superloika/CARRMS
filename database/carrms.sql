-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2023 at 09:09 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `advisers`
--

CREATE TABLE `advisers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middlename` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `advisers`
--

INSERT INTO `advisers` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `address`, `status`, `created_at`, `updated_at`) VALUES
(11, 'Kim', 'Kimmy', 'Kimmytest', 'Female', 'Haguilanan Grande, Balilihan, Bohol', 1, '2023-01-17 04:45:11', '2023-01-17 04:52:25'),
(12, 'Jane', 'Smith', 'Doe', 'Female', 'Bohol', 1, '2023-01-17 05:12:08', '2023-01-17 05:12:08');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment_head`
--

CREATE TABLE `enrollment_head` (
  `id` int(11) NOT NULL,
  `sy_id` int(11) NOT NULL,
  `adviser_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `enrollment_head`
--

INSERT INTO `enrollment_head` (`id`, `sy_id`, `adviser_id`, `section_id`, `created_at`, `updated_at`) VALUES
(87, 24, 11, 31, '2023-01-21 03:54:42', '2023-01-21 03:54:42'),
(88, 24, 12, 18, '2023-01-21 03:59:22', '2023-01-21 03:59:22'),
(89, 24, 11, 30, '2023-01-21 04:00:37', '2023-01-21 04:00:37');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment_line`
--

CREATE TABLE `enrollment_line` (
  `id` bigint(20) NOT NULL,
  `head_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `strand_id` int(11) DEFAULT NULL,
  `final_remarks` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gradelevels`
--

CREATE TABLE `gradelevels` (
  `id` int(11) NOT NULL,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gradelevels`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
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
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0000_00_00_000000_create_websockets_statistics_entries_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schoolyears`
--

CREATE TABLE `schoolyears` (
  `id` int(11) NOT NULL,
  `sy` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `schoolyears`
--

INSERT INTO `schoolyears` (`id`, `sy`, `status`, `created_at`, `updated_at`) VALUES
(24, '2022-2023', 1, '2023-01-21 03:38:39', '2023-01-21 03:38:39');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adviser_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `sections`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `strands`
--

CREATE TABLE `strands` (
  `id` int(11) NOT NULL,
  `strand_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `strand_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `strands`
--

INSERT INTO `strands` (`id`, `strand_name`, `strand_description`) VALUES
(1, 'HUMSS', 'HUMANITIES AND SOCIAL SCIENCES'),
(2, 'ABM', 'ACOUNTANCY AND BUSINESS MANAGEMENT');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) NOT NULL,
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
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `lrn`, `firstname`, `middlename`, `lastname`, `extname`, `gender`, `dob`, `pob`, `address`, `guardian`, `guardian_address`, `is_enrolled`, `current_grade`, `last_syid`, `last_grade`, `last_final_remarks`, `created_at`, `updated_at`) VALUES
(1, '1010101', 'Rasmus', 'Chase', 'Lerdorf', NULL, 'Male', '1996-08-21', 'Bohol, Philippines', 'Bohol, Philippines', 'NA', 'NA', 0, '', NULL, '', '', '2023-01-17 05:08:00', '2023-01-21 04:07:11'),
(3, '', 'test', 'test', 'test', NULL, 'Male', '2003-06-05', 'test', 'test', 'test', 'test', 0, '', 0, '', '', '2022-12-16 03:11:24', '2023-01-21 00:06:39'),
(5, '', 'Juan', 'Test', 'Dela Cruz', 'Jr', 'Male', '1992-05-16', 'Test Place, 123 Test', 'Test Place, 123 Test', 'Maria Clara', 'Test Place, 123 Test', 0, '', 0, '', '', '2022-12-16 03:20:10', '2023-01-21 00:06:39'),
(9, '', 'sdf', 'sdf', 'sdf', NULL, 'Male', '2021-03-05', 'sdf', 'sdf', 'sdf', 'sdf', 0, '', 0, '', '', '2022-12-21 05:01:46', '2023-01-21 00:06:39'),
(11, NULL, 'Bob', 'Smith', 'Mitchel', NULL, 'Male', '1997-06-12', 'Philippines', 'Philippines', 'NA', 'NA', 0, '', 0, '', '', '2023-01-15 03:14:19', '2023-01-21 00:06:39'),
(12, '111', 'Mike', 'Swift', 'Otwell', NULL, 'Male', '1997-05-06', 'Bohol, Philippines', 'Bohol, Philippines', 'NA', 'NA', 0, '', 0, '', '', '2023-01-15 03:15:25', '2023-01-21 00:06:39'),
(13, '222', 'Taylor', 'Otwell', 'Otwell', NULL, 'Male', '1983-02-02', 'test', 'test', 'test', 'test', 0, '', 0, '', '', '2023-01-15 03:16:06', '2023-01-21 00:06:39'),
(14, '101', 'Kael', 'Bradd', 'Williams', NULL, 'Male', '1996-08-08', 'Bohol', 'Bohol', 'NA', 'NA', 0, '', 0, '', '', '2023-01-15 12:09:04', '2023-01-21 00:06:39'),
(15, '1011', 'Vina', 'Mae', 'Rebusa', NULL, 'Female', '1994-10-21', 'Bohol', 'Bohol', 'NA', 'NA', 0, '', 0, '', '', '2023-01-17 01:17:12', '2023-01-21 00:49:35'),
(16, '222333', 'xxx', 'xxx', 'xxx', NULL, 'Male', '2022-02-02', 'xxx', 'xxx', 'xxx', 'xxx', 0, '', NULL, '', '', '2023-01-17 05:10:57', '2023-01-21 00:06:39');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `subject_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject_code`, `subject_name`, `subject_description`, `subject_type`) VALUES
(43, 'test1', 'Test 1', 'Test 1 description', NULL),
(45, 'ORALCOM', 'Oral Communication', 'Oral Communication', 'Core');

-- --------------------------------------------------------

--
-- Table structure for table `subtags`
--

CREATE TABLE `subtags` (
  `id` int(11) NOT NULL,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_id` int(11) NOT NULL,
  `strand_id` int(11) DEFAULT NULL,
  `sem` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `subtags`
--

INSERT INTO `subtags` (`id`, `grade`, `level`, `subject_id`, `strand_id`, `sem`) VALUES
(50, 'Nursery', 'Nursery', 43, NULL, NULL),
(51, 'Grade 11', 'Senior High', 45, 1, 1),
(52, 'Grade 11', 'Senior High', 45, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `adviser_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `adviser_id`, `name`, `username`, `email`, `email_verified_at`, `password`, `user_type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Test Admin', 'admin', 'admin@test.com', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
(2, NULL, 'Super Admin', 'super', '', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'super_admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
(7, 11, 'Kim Kimmy Kimmytest', 'kimkimmytest', NULL, NULL, '$2y$10$D0oqPf0GsSidTCebHlWwhukKf8Vt/k8Kvn2.bRo9amtpZlqgqVSii', 'adviser', NULL, '2023-01-16 20:45:11', '2023-01-16 20:45:11'),
(8, 12, 'Jane Smith Doe', 'janedoe', NULL, NULL, '$2y$10$BLKumL1dOScwi3cMRB3bVOsUyhuOOFZLUEBFn1DjOHJxp3PyPbBPu', 'adviser', NULL, '2023-01-16 21:12:08', '2023-01-16 21:12:08');

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advisers`
--
ALTER TABLE `advisers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `firstname` (`firstname`),
  ADD KEY `middlename` (`middlename`),
  ADD KEY `lastname` (`lastname`),
  ADD KEY `gender` (`gender`),
  ADD KEY `address` (`address`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `enrollment_head`
--
ALTER TABLE `enrollment_head`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sy_id` (`sy_id`),
  ADD KEY `adviser_id` (`adviser_id`),
  ADD KEY `section_id` (`section_id`);

--
-- Indexes for table `enrollment_line`
--
ALTER TABLE `enrollment_line`
  ADD PRIMARY KEY (`id`),
  ADD KEY `head_id` (`head_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `final_remarks` (`final_remarks`),
  ADD KEY `strand_id` (`strand_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gradelevels`
--
ALTER TABLE `gradelevels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grade` (`grade`),
  ADD KEY `level` (`level`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `schoolyears`
--
ALTER TABLE `schoolyears`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sy` (`sy`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grade` (`grade`),
  ADD KEY `level` (`level`),
  ADD KEY `section` (`section`),
  ADD KEY `adviser_id` (`adviser_id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `strands`
--
ALTER TABLE `strands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `strand_name` (`strand_name`),
  ADD KEY `strand_description` (`strand_description`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lrn` (`lrn`),
  ADD KEY `firstname` (`firstname`),
  ADD KEY `middlename` (`middlename`),
  ADD KEY `lastname` (`lastname`),
  ADD KEY `extname` (`extname`),
  ADD KEY `gender` (`gender`),
  ADD KEY `dob` (`dob`),
  ADD KEY `pob` (`pob`),
  ADD KEY `address` (`address`),
  ADD KEY `guardian` (`guardian`),
  ADD KEY `guardian_address` (`guardian_address`),
  ADD KEY `is_enrolled` (`is_enrolled`),
  ADD KEY `current_grade` (`current_grade`),
  ADD KEY `last_syid` (`last_syid`),
  ADD KEY `last_grade` (`last_grade`),
  ADD KEY `last_final_remarks` (`last_final_remarks`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_code` (`subject_code`),
  ADD KEY `subject_name` (`subject_name`),
  ADD KEY `subject_description` (`subject_description`),
  ADD KEY `subject_type` (`subject_type`);

--
-- Indexes for table `subtags`
--
ALTER TABLE `subtags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `adviser_id` (`adviser_id`),
  ADD KEY `name` (`name`),
  ADD KEY `password` (`password`),
  ADD KEY `email_verified_at` (`email_verified_at`),
  ADD KEY `user_type` (`user_type`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advisers`
--
ALTER TABLE `advisers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `enrollment_head`
--
ALTER TABLE `enrollment_head`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `enrollment_line`
--
ALTER TABLE `enrollment_line`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gradelevels`
--
ALTER TABLE `gradelevels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `schoolyears`
--
ALTER TABLE `schoolyears`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `strands`
--
ALTER TABLE `strands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `subtags`
--
ALTER TABLE `subtags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
