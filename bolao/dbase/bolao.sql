-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25/06/2026 às 21:04
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bolao`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `participantes`
--

CREATE TABLE `participantes` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `time_casa` varchar(50) NOT NULL,
  `time_visitante` varchar(50) NOT NULL,
  `pagamento` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `participantes`
--

INSERT INTO `participantes` (`id`, `nome`, `time_casa`, `time_visitante`, `pagamento`) VALUES
(1, 'Franciane', '2', '0', 'sim'),
(2, 'Chagas', '2', '1', 'sim'),
(3, 'Chagas', '1', '2', 'sim'),
(4, 'Queliane', '3', '1', 'sim'),
(5, 'Franciney', '1', '0', 'sim'),
(6, 'Ygor', '1', '0', 'sim'),
(29, 'Lenir', '2', '0', 'sim'),
(31, 'Márcia', '5', '1', 'sim'),
(35, 'Robson', '2', '0', 'sim'),
(36, 'Fernanda', '3', '0', 'sim'),
(37, 'Vadico', '2', '0', 'sim'),
(38, 'Vadico', '3', '1', 'sim'),
(39, 'Moises', '3', '1', 'sim'),
(40, 'Moises', '4', '0', 'sim'),
(41, 'Welligton', '1', '1', 'sim'),
(42, 'Welligton', '0', '0', 'sim'),
(43, 'Jassy', '2', '1', 'sim'),
(44, 'Talita', '2', '0', 'sim'),
(45, 'Thaty', '3', '0', 'sim'),
(46, 'Ferdinan', '0', '0', 'sim'),
(47, 'Leonardo', '1', '0', 'nao'),
(48, 'Eduardo', '2', '0', 'sim'),
(49, 'Potência', '3', '2', 'sim'),
(50, 'Potência', '3', '1', 'sim'),
(51, 'Potência', '1', '1', 'sim'),
(52, 'Potência', '0', '1', 'sim'),
(53, 'Niel', '4', '1', 'sim'),
(54, 'Niel', '3', '0', 'sim'),
(55, 'Chagas', '1', '1', 'sim'),
(56, 'Cici', '2', '1', 'sim'),
(57, 'João victor', '2', '1', 'sim'),
(58, 'Marquinho', '3', '0', 'sim'),
(59, 'Marquinho', '1', '1', 'sim'),
(60, 'Sandra', '2', '1', 'sim'),
(61, 'Sandra', '3', '1', 'sim'),
(62, 'Liz', '2', '0', 'sim'),
(63, 'Chutuca', '0', '1', 'sim'),
(64, 'Chutuca', '2', '0', 'sim'),
(65, 'Miúdo ', '4', '2', 'sim'),
(66, 'Miúdo ', '1', '3', 'sim'),
(67, 'Talita', '3', '1', 'sim'),
(68, 'Edealdo', '3', '0', 'nao'),
(69, 'Donaldson', '3', '1', 'sim'),
(70, 'Donaldson', '4', '0', 'sim'),
(71, 'Maria Antonia', '2', '1', 'sim'),
(72, 'Maria Antonia', '2', '0', 'sim');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `participantes`
--
ALTER TABLE `participantes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `participantes`
--
ALTER TABLE `participantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
