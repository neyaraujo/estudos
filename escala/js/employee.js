"use strict";

const Employee = {

    getEmployees() {

        const employees = [];

        for (let i = 1; i <= 4; i++) {

            const value = $(`#employee${i}`).value.trim();

            if (value !== "") {

                employees.push(value);

            }

        }

        return employees;

    }

};