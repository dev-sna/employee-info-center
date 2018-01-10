-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2018 at 05:36 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `father` varchar(50) NOT NULL,
  `dob` varchar(10) NOT NULL,
  `doj` varchar(10) NOT NULL,
  `regulardate` varchar(10) NOT NULL,
  `bps` int(11) NOT NULL,
  `designation` varchar(200) NOT NULL,
  `department` varchar(100) NOT NULL,
  `qualification` varchar(200) DEFAULT NULL,
  `certifications` varchar(200) DEFAULT NULL,
  `cnic` varchar(20) DEFAULT NULL,
  `cell` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `domicile` varchar(50) DEFAULT NULL,
  `file` varchar(10) DEFAULT NULL,
  `employeeid` varchar(10) DEFAULT NULL,
  `lpromo` varchar(200) DEFAULT NULL,
  `ecat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `name`, `father`, `dob`, `doj`, `regulardate`, `bps`, `designation`, `department`, `qualification`, `certifications`, `cnic`, `cell`, `email`, `address`, `domicile`, `file`, `employeeid`, `lpromo`, `ecat`) VALUES
(1, 'Test Subject', 'dsads', '01-01-0001', '01-01-0001', '01-01-0001', 17, 'test', 'department of test', 'test degree', 'test certified', '12345-1234567-1', '1234-1234567', 'test@test.com', 'Home sweet Home', '1', '000', '000', '01-01-0001', 'Test'),
(2, '', '', '', '', '', 0, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '', '', '', '', '', 0, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, '', '', '', '', '', 0, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'alpha', 'alpha', '1', '1', '1', 7, 'dsds', 'dsdsdsds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'alpha', 'alpha', '1', '1', '1', 7, 'dsds', 'dsdsdsds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'alpha', 'alpha', '1', '1', '1', 7, 'dsds', 'dsdsdsds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'dsddsddsd', 'dsds', 'dsd', 'dsds', 'dsd', 7, 'dsdsdd', 'Director ORIC', 'dsdsds', 'dsd', 'dsd', 'sds', 'sdsd', 'sdsds', 'ds', 'dsdsd', 'sdsd', 'sdd', 'Contract');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `username` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`username`, `password`) VALUES
('admin', '8831c4271e2356d8aca19c8d0d8b66fdde48b0c759a5e84d3743b4b011f21080'),
('user', '5bee08aa20b56684abc6811657597da96dcb8d6634d73d149db8248c3cd900fb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
