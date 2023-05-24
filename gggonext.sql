-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2023 at 12:21 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gggonext`
--

-- --------------------------------------------------------

--
-- Table structure for table `forums`
--

CREATE TABLE `forums` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `forums`
--

INSERT INTO `forums` (`id`, `name`) VALUES
(1, 'Valorant'),
(2, 'Overwatch2'),
(3, 'LeagueOfLegends'),
(4, 'ProjectZomboid'),
(5, 'GreenHell'),
(6, 'Sims4'),
(7, 'CSGO'),
(8, 'GenshinImpact'),
(9, 'CallOfDutyMW2'),
(10, 'TheWitcher3'),
(11, 'AssassinsCreedValhalla'),
(12, 'Minecraft'),
(13, 'Fortnite'),
(14, 'RedDeadRedemption2'),
(15, 'ApexLegends'),
(16, 'WorldOfWarcraft'),
(17, 'Cyberpunk2077'),
(18, 'RocketLeague'),
(19, 'FinalFantasyXIV'),
(20, 'DeadByDaylight'),
(21, 'RainbowSixSiege'),
(22, 'AnimalCrossing'),
(23, 'HaloInfinite'),
(24, 'Battlefield2042'),
(25, 'TheElderScrollsOnline'),
(26, 'Destiny2'),
(27, 'GTA5'),
(28, 'FIFA21'),
(29, 'AmongUs'),
(30, 'FallGuys'),
(31, 'Borderlands3'),
(32, 'TheLastOfUsPartII'),
(33, 'PokémonSwordAndShield'),
(34, 'StarWarsJediFallenOrder'),
(35, 'MonsterHunterWorld'),
(36, 'Overwatch'),
(37, 'Rust'),
(38, 'Paladins'),
(39, 'Terraria'),
(40, 'TheDivision2'),
(41, 'CounterStrikeGlobalOffensive'),
(42, 'Warframe'),
(43, 'Minecraft'),
(44, 'Fortnite'),
(45, 'CallOfDutyModernWarfare'),
(46, 'ApexLegends'),
(47, 'h'),
(48, 'forumgvbfdgdf'),
(49, 'Test');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `forumId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `content`, `userId`, `forumId`) VALUES
(1, 'This game is amazing!', 1, 3),
(2, 'Looking for teammates!', 2, 7),
(3, 'Check out this gameplay video!', 4, 1),
(4, 'Any tips for beginners?', 3, 3),
(5, 'The graphics in this game are stunning!', 5, 8),
(6, 'Just finished the main quest, what an epic journey!', 1, 1),
(7, 'Looking for Viking allies to raid with!', 2, 2),
(8, 'Building an epic castle in Survival mode!', 3, 3),
(9, 'Best landing spot for quick loot in Battle Royale?', 4, 4),
(10, 'The graphics in this game are breathtaking!', 5, 5),
(11, 'Anyone up for a ranked match?', 6, 6),
(12, 'Need help with the latest raid boss, any tips?', 7, 7),
(13, 'Exploring the new update, loving the new quests!', 8, 8),
(14, 'Trading rare items, DM me if interested!', 9, 9),
(15, 'Who else is excited for the upcoming DLC?', 10, 10),
(16, 'Surviving against the killer is so intense!', 11, 11),
(17, 'The new operator in Siege is overpowered!', 12, 12),
(19, 'gg', 16, 1),
(20, 'This game is amazing!', 1, 3),
(21, 'Looking for teammates!', 2, 7),
(22, 'Check out this gameplay video!', 4, 1),
(23, 'Any tips for beginners?', 3, 3),
(24, 'The graphics in this game are stunning!', 5, 8),
(25, 'Just finished the main quest, what an epic journey...', 1, 1),
(26, 'Looking for Viking allies to raid with!', 2, 2),
(27, 'Building an epic castle in Survival mode!', 3, 3),
(28, 'Best landing spot for quick loot in Battle Royale?', 4, 4),
(29, 'The graphics in this game are breathtaking!', 5, 5),
(30, 'Anyone up for a ranked match?', 6, 6),
(31, 'Need help with the latest raid boss, any tips?', 7, 7),
(32, 'Exploring the new update, loving the new quests!', 8, 8),
(33, 'Trading rare items, DM me if interested!', 9, 9),
(34, 'Who else is excited for the upcoming DLC?', 10, 10),
(35, 'Surviving against the killer is so intense!', 11, 11),
(36, 'The new operator in Siege is overpowered!', 12, 12),
(37, 'Example post content', 13, 13),
(38, 'Another example post', 14, 14),
(39, 'Post about game strategies', 15, 15),
(40, 'Sharing game achievements', 16, 16),
(41, 'Looking for guild members', 17, 17),
(43, 'This game is amazing!', 1, 3),
(44, 'Looking for teammates!', 2, 7),
(45, 'Check out this gameplay video!', 4, 1),
(46, 'Any tips for beginners?', 3, 3),
(47, 'The graphics in this game are stunning!', 5, 8),
(48, 'Just finished the main quest, what an epic journey...', 1, 1),
(49, 'Looking for Viking allies to raid with!', 2, 2),
(50, 'Building an epic castle in Survival mode!', 3, 3),
(51, 'Best landing spot for quick loot in Battle Royale?', 4, 4),
(52, 'The graphics in this game are breathtaking!', 5, 5),
(53, 'Anyone up for a ranked match?', 6, 6),
(54, 'Need help with the latest raid boss, any tips?', 7, 7),
(55, 'Exploring the new update, loving the new quests!', 8, 8),
(56, 'Trading rare items, DM me if interested!', 9, 9),
(57, 'Who else is excited for the upcoming DLC?', 10, 10),
(58, 'Surviving against the killer is so intense!', 11, 11),
(59, 'The new operator in Siege is overpowered!', 12, 12),
(60, 'Example post content', 13, 13),
(61, 'Another example post', 14, 14),
(62, 'Post about game strategies', 15, 15),
(63, 'Sharing game achievements', 16, 16),
(64, 'Looking for guild members', 17, 17);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'JohnSmith', 'john@example.com', '123'),
(2, 'EmmaJohnson', 'emma@example.com', '123'),
(3, 'AhmedAli', 'ahmed@example.com', '123'),
(4, 'SarahAdams', 'sarah@example.com', '123'),
(5, 'MohamedHassan', 'mohamed@example.com', '123'),
(6, 'MarkTaylor', 'mark@example.com', 'mark123'),
(7, 'OliviaBrown', 'olivia@example.com', 'olivia123'),
(8, 'LiamJohnson', 'liam@example.com', 'liam123'),
(9, 'AvaMiller', 'ava@example.com', 'ava123'),
(10, 'NoahAnderson', 'noah@example.com', 'noah123'),
(11, 'IsabellaMartinez', 'isabella@example.com', 'isabella123'),
(12, 'JamesDavis', 'james@example.com', 'james123'),
(13, 'SophiaWilson', 'sophia@example.com', 'sophia123'),
(14, 'BenjaminThomas', 'benjamin@example.com', 'benjamin123'),
(15, 'EvelynPrice', 'evelyn@example.com', 'evelyn123'),
(16, 'meryem', 'meryem@gmail.com', '123'),
(17, 'test', 'test@gmail.com', '123'),
(18, 'potato', 'potato@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `forums`
--
ALTER TABLE `forums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `forumId` (`forumId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `forums`
--
ALTER TABLE `forums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`forumId`) REFERENCES `forums` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
