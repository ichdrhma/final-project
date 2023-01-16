-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 16, 2023 at 02:16 PM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `covids`
--

CREATE TABLE `covids` (
  `id` int(11) NOT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kasus` int(11) DEFAULT NULL,
  `kasusHarian` int(11) DEFAULT NULL,
  `sembuh` int(11) DEFAULT NULL,
  `kematian` int(11) DEFAULT NULL,
  `meninggalHarian` int(11) DEFAULT NULL,
  `RI` double DEFAULT NULL,
  `CFR` double DEFAULT NULL,
  `RasioLacak` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `covids`
--

INSERT INTO `covids` (`id`, `provinsi`, `kasus`, `kasusHarian`, `sembuh`, `kematian`, `meninggalHarian`, `RI`, `CFR`, `RasioLacak`, `createdAt`, `updatedAt`) VALUES
(2, 'Aceh', 37734, 40, 34027, 1927, 10, 90.2, 5.1, 0.29, '2023-01-16 14:06:55', '2023-01-16 14:08:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `covids`
--
ALTER TABLE `covids`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `covids`
--
ALTER TABLE `covids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
