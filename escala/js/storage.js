"use strict";

const Storage = {

    save() {

        const data = {

            employee1: $("#employee1").value,
            employee2: $("#employee2").value,
            employee3: $("#employee3").value,
            employee4: $("#employee4").value,
            startDate: $("#startDate").value,
            month: $("#month").value,
            year: $("#year").value

        };

        localStorage.setItem(

            "schedule24x72",

            JSON.stringify(data)

        );

    },

    load() {

        const data = JSON.parse(

            localStorage.getItem("schedule24x72")

        );

        if (!data) return;

        $("#employee1").value = data.employee1;
        $("#employee2").value = data.employee2;
        $("#employee3").value = data.employee3;
        $("#employee4").value = data.employee4;

        $("#startDate").value = data.startDate;

        // $("#month").value = data.month;
        $("#month").value = new Date($("#startDate").value).getMonth() + 1;
        
        

        // $("#year").value = data.year;
        $("#year").value = new Date($("#startDate").value).getFullYear();

    }

};