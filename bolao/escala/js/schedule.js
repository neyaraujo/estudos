"use strict";

const Schedule = {

    generate() {

        const employees = Employee.getEmployees();

        if (employees.length === 0) {

            alert("Informe pelo menos um funcionário.");

            return;

        }

        const startDate = $("#startDate").value;

        if (!startDate) {

            alert("Informe a data inicial.");

            return;

        }

        const month = Number($("#month").value);
        const year = Number($("#year").value);

        const tbody = $("#scheduleTableBody");

        tbody.innerHTML = "";

        const totalDays = new Date(year, month, 0).getDate();

        const week = [

            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "Sáb"

        ];

        let employeeIndex = 0;

        const initial = new Date(startDate);

        for (let day = 1; day <= totalDays; day++) {

            const current = new Date(year, month - 1, day);

            const difference = Math.floor(

                (current - initial) / (1000 * 60 * 60 * 24)

            );

            let employee = "Folga";

            if (difference >= 0 && difference % 1 === 0) {

                employee = employees[employeeIndex];

                employeeIndex++;

                if (employeeIndex >= employees.length) {

                    employeeIndex = 0;

                }

            }

            const row = document.createElement("tr");

            row.innerHTML = `

                <td>${twoDigits(day)}/${twoDigits(month)}/${year}</td>

                <td>${week[current.getDay()]}</td>

                <td>${employee}</td>

            `;

            tbody.appendChild(row);

        }

    }

};