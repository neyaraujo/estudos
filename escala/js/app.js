"use strict";

document.addEventListener("DOMContentLoaded", () => {

    Calendar.populateMonths();

    Calendar.populateYears();

    Storage.load();

    const form = $("#scheduleForm");

    form.addEventListener("submit", (event) => {
        
        event.preventDefault();

        Storage.save();
        
        Schedule.generate();
        
        Storage.load();

        const timer = setTimeout(() => {
            Schedule.generate();
        },300);  

    });

    $("#printSchedule").addEventListener("click", () => {

        window.print();

    });




});