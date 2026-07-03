"use strict";

const Calendar = {

    months: [

        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"

    ],

    populateMonths() {

        const select = $("#month");

        this.months.forEach((month, index) => {

            const option = document.createElement("option");

            option.value = index + 1;
            option.textContent = month;

            select.appendChild(option);

        });

    },

    populateYears() {

        const select = $("#year");

        const currentYear = new Date().getFullYear();

        for (let year = currentYear - 2; year <= currentYear + 5; year++) {

            const option = document.createElement("option");

            option.value = year;
            option.textContent = year;

            select.appendChild(option);

        }

        select.value = currentYear;

    }

};