-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/06/2026 às 21:49
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
(74, 'Gabriel', '2', '1', 'nao'),
(75, 'Betinho', '1', '0', 'sim'),
(76, 'Carlos Artes', '2', '1', 'sim'),
(77, 'Jucileide', '2', '1', 'sim'),
(78, 'Franciane', '1', '1', 'sim'),
(79, 'Wagner', '3', '1', 'sim'),
(80, 'Moises', '2', '0', 'sim'),
(81, 'Moises', '3', '1', 'sim'),
(82, 'Lissandra', '2', '1', 'sim'),
(83, 'Idealberto', '2', '1', 'nao'),
(84, 'Francisca', '2', '1', 'sim'),
(85, 'Chagas', '1', '1', 'sim'),
(86, 'Chagas', '2', '1', 'sim'),
(87, 'Chagas', '0', '1', 'sim'),
(88, 'Manoel', '3', '1', 'sim'),
(89, 'Arnaldo', '3', '1', 'sim'),
(90, 'Ribinha', '1', '2', 'nao'),
(91, 'Shirley', '4', '2', 'sim'),
(92, 'Lenir', '2', '1', 'sim'),
(93, 'Lenir', '4', '2', 'sim'),
(94, 'Antônio José ', '1', '0', 'sim'),
(95, 'Yan', '3', '1', 'sim'),
(96, 'Robson', '3', '2', 'sim'),
(97, 'Wellington', '0', '0', 'sim'),
(98, 'Welligton', '2', '2', 'sim'),
(99, 'Junalia', '2', '1', 'nao'),
(100, 'Jassy', '2', '0', 'sim'),
(101, 'Robson', '3', '3', 'sim'),
(102, 'Idealberto', '1', '0', 'sim'),
(103, 'Niel', '3', '0', 'sim'),
(104, 'Carlinhos', '3', '2', 'sim'),
(105, 'Carlinhos', '0', '0', 'sim'),
(106, 'Nice', '2', '1', 'sim'),
(107, 'Edna', '3', '0', 'sim'),
(108, 'Marcia', '1', '1', 'sim'),
(109, 'Ferdinan', '2', '0', 'sim'),
(110, 'Alison', '4', '0', 'sim'),
(111, 'Potencia', '2', '1', 'sim'),
(112, 'Ribinha', '2', '1', 'sim'),
(115, 'Potencia', '3', '0', 'sim');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
