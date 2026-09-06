-- =========================================================
-- CRIAÇÃO DO BANCO
-- =========================================================

CREATE DATABASE IF NOT EXISTS rifa
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;


-- =========================================================
-- SELECIONA O BANCO
-- =========================================================

USE rifa;


-- =========================================================
-- TABELA DE PARTICIPANTES
-- =========================================================

CREATE TABLE IF NOT EXISTS participantes (

    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    numero TINYINT UNSIGNED NOT NULL,

    nome VARCHAR(100) NOT NULL,

    telefone VARCHAR(20) NOT NULL,

    data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    /*
     * Impede que o mesmo número seja reservado
     * mais de uma vez.
     */
    CONSTRAINT uk_participantes_numero
        UNIQUE (numero)

);
