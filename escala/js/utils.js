"use strict";

/**
 * Seleciona um elemento.
 */
const $ = (selector) => document.querySelector(selector);

/**
 * Seleciona vários elementos.
 */
const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Cria um elemento HTML.
 */
function createElement(tag, className = "") {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    return element;

}

/**
 * Formata número com dois dígitos.
 */

function twoDigits(number) {

    return String(number).padStart(2, "0");

}