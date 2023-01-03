-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2023 at 08:20 AM
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
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `advisers`
--

INSERT INTO `advisers` (`id`, `firstname`, `middlename`, `lastname`, `gender`, `address`, `status`, `created_at`, `updated_at`) VALUES
(1, 'John', 'Dummy', 'Doe', 'Male', 'Tagbilaran', 'active', '2022-12-16 04:20:05', '2022-12-16 04:20:05'),
(5, 'Kim', 'sdfsdfdsf', 'Orilla', 'Female', 'Haguilanan Grande, Balilihan, Bohol', 'active', '2022-12-21 04:18:24', '2022-12-21 04:18:24'),
(10, 'Jane', 'Dummy', 'Smith', 'Female', 'Bohol', 'active', '2023-01-03 14:04:20', '2023-01-03 14:04:20');

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
(1, 0, 0, 0, '2022-12-16 04:20:05', '2022-12-21 02:47:43'),
(12, 0, 0, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:28'),
(13, 0, 0, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:29'),
(14, 0, 0, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:29'),
(15, 0, 0, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:30'),
(18, 0, 0, 0, '2022-12-16 04:20:05', '2022-12-21 03:20:10'),
(30, 0, 0, 0, '2023-01-03 12:24:17', '2023-01-03 12:24:17');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment_line`
--

CREATE TABLE `enrollment_line` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `enrollment_line`
--

INSERT INTO `enrollment_line` (`id`, `student_id`, `created_at`, `updated_at`) VALUES
(1, 0, '2022-12-16 04:20:05', '2022-12-21 02:47:43'),
(12, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:28'),
(13, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:29'),
(14, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:29'),
(15, 0, '2022-12-21 02:42:47', '2022-12-21 03:20:30'),
(18, 0, '2022-12-16 04:20:05', '2022-12-21 03:20:10'),
(30, 0, '2023-01-03 12:24:17', '2023-01-03 12:24:17');

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
  `status` float NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `schoolyears`
--

INSERT INTO `schoolyears` (`id`, `sy`, `status`, `created_at`, `updated_at`) VALUES
(12, '2021-2022', 0, '2023-01-03 11:42:27', '2023-01-03 12:07:29'),
(13, '2022-2023', 1, '2023-01-03 11:43:40', '2023-01-03 12:07:29');

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
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `order`, `grade`, `level`, `section`, `adviser_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Preschool', 'Preschool', '1', NULL, '2022-12-16 04:20:05', '2022-12-21 02:47:43'),
(12, 4, 'Grade 7', 'Junior High', '1', 10, '2022-12-21 02:42:47', '2023-01-03 15:19:10'),
(13, 4, 'Grade 8', 'Junior High', '1', NULL, '2022-12-21 02:42:47', '2022-12-21 03:20:29'),
(14, 4, 'Grade 9', 'Junior High', '1', NULL, '2022-12-21 02:42:47', '2022-12-21 03:20:29'),
(15, 4, 'Grade 10', 'Junior High', '1', NULL, '2022-12-21 02:42:47', '2022-12-21 03:20:30'),
(18, 2, 'Kinder 1', 'Kinder', '1', NULL, '2022-12-16 04:20:05', '2022-12-21 03:20:10'),
(30, 5, 'Grade 12', 'Senior High', '1', NULL, '2023-01-03 12:24:17', '2023-01-03 12:24:17');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
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
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `middlename`, `lastname`, `extname`, `gender`, `dob`, `pob`, `address`, `guardian`, `guardian_address`, `created_at`, `updated_at`) VALUES
(3, 'test', 'test', 'test', NULL, 'Male', '2003-06-05', 'test', 'test', 'test', 'test', '2022-12-16 03:11:24', '2022-12-16 03:11:24'),
(5, 'Juan', 'Test', 'Dela Cruz', 'Jr', 'Male', '1992-05-16', 'Test Place, 123 Test', 'Test Place, 123 Test', 'Maria Clara', 'Test Place, 123 Test', '2022-12-16 03:20:10', '2022-12-16 03:20:10'),
(9, 'sdf', 'sdf', 'sdf', NULL, 'Male', '2021-03-05', 'sdf', 'sdf', 'sdf', 'sdf', '2022-12-21 05:01:46', '2022-12-21 05:01:46');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `grade`, `subject_name`, `subject_description`, `created_at`, `updated_at`) VALUES
(32, 'Grade 1', 'English 1', 'test', '2023-01-03 12:51:09', '2023-01-03 12:51:09'),
(35, 'Grade 1', 'Math 1', 'test test', '2023-01-03 12:52:20', '2023-01-03 12:52:20'),
(36, 'Grade 2', 'English 2', 'test', '2023-01-03 12:52:29', '2023-01-03 12:52:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
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

INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `password`, `user_type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test Admin', 'admin', 'admin@test.com', NULL, '$2y$10$5UKZ19tzX1eIz.Na8MrC3e0mv.bkg3XvTysaoXMCugUo2.q95aOTe', 'admin', NULL, '2022-10-23 02:08:21', '2022-10-23 02:08:21'),
(5, 'AdviserTest', 'adviser', NULL, NULL, '$2y$10$5o3wNl9HnQq953zzxlifF.PI46FiX4Yu4TqJDXVEGYYt/aV/gikpW', 'adviser', NULL, '2022-12-20 21:44:43', '2022-12-20 21:44:44'),
(6, 'Jane Dummy Smith', 'janedummy', NULL, NULL, '$2y$10$gYH85JQSLneALF0kTnyYLue39uWwltIKp5.libdZUct9QHBbBlif6', 'adviser', NULL, '2023-01-03 06:04:20', '2023-01-03 06:04:20');

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
  ADD KEY `created_at` (`created_at`),
  ADD KEY `updated_at` (`updated_at`),
  ADD KEY `gender` (`gender`),
  ADD KEY `address` (`address`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `enrollment_head`
--
ALTER TABLE `enrollment_head`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_at` (`created_at`) USING BTREE,
  ADD KEY `updated_at` (`updated_at`) USING BTREE,
  ADD KEY `firstname` (`adviser_id`) USING BTREE,
  ADD KEY `sy_id` (`sy_id`);

--
-- Indexes for table `enrollment_line`
--
ALTER TABLE `enrollment_line`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_at` (`created_at`) USING BTREE,
  ADD KEY `updated_at` (`updated_at`) USING BTREE;

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_at` (`created_at`) USING BTREE,
  ADD KEY `updated_at` (`updated_at`) USING BTREE,
  ADD KEY `firstname` (`sy`) USING BTREE,
  ADD KEY `middlename` (`status`) USING BTREE;

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_at` (`created_at`) USING BTREE,
  ADD KEY `updated_at` (`updated_at`) USING BTREE,
  ADD KEY `middlename` (`section`) USING BTREE,
  ADD KEY `firstname` (`grade`) USING BTREE,
  ADD KEY `level` (`level`),
  ADD KEY `order` (`order`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
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
  ADD KEY `created_at` (`created_at`),
  ADD KEY `updated_at` (`updated_at`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_at` (`created_at`) USING BTREE,
  ADD KEY `updated_at` (`updated_at`) USING BTREE,
  ADD KEY `firstname` (`grade`) USING BTREE,
  ADD KEY `subject_name` (`subject_name`),
  ADD KEY `subject_description` (`subject_description`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `enrollment_head`
--
ALTER TABLE `enrollment_head`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `enrollment_line`
--
ALTER TABLE `enrollment_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `schoolyears`
--
ALTER TABLE `schoolyears`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
