/*
EVENT CALENDAR SCRIPTS
Add, Update, Delete an Event
Uses Local Storage method to save events locally
*/

var calendar = {
    //calendar specifics
    mName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Month Names
    data: null, // Events for the selected period
    sDay: 0, // Current selected day
    sMth: 0, // Current selected month
    sYear: 0, // Current selected year
    sMon: false, // Week start on Monday?

    //get current month calendar	
    list: function() {

        //calculations for Month, Year, and Date  
        calendar.sMth = parseInt(document.getElementById("calendar-month").value); // selected month
        calendar.sYear = parseInt(document.getElementById("calendar-year").value); // selected year
        var daysInMth = new Date(calendar.sYear, calendar.sMth + 1, 0).getDate(), // number of days in selected month
            startDay = new Date(calendar.sYear, calendar.sMth, 1).getDay(), // first day of the month
            endDay = new Date(calendar.sYear, calendar.sMth, daysInMth).getDay(); // last day of the month

        //gets event information from local storage
        calendar.data = localStorage.getItem("calendar-" + calendar.sMth + "-" + calendar.sYear);
        if (calendar.data == null) {
            localStorage.setItem("calendar-" + calendar.sMth + "-" + calendar.sYear, "{}");
            calendar.data = {};
        } else {
            calendar.data = JSON.parse(calendar.data);
        }

        //calculates proper number of day-buckets at month-start (unused are empty)
        var squares = [];
        if (calendar.sMon && startDay != 1) {
            var blanks = startDay == 0 ? 7 : startDay;
            for (var i = 1; i < blanks; i++) { squares.push("b"); }
        }
        if (!calendar.sMon && startDay != 0) {
            for (var i = 0; i < startDay; i++) { squares.push("b"); }
        }

        //populates days of the month
        for (var i = 1; i <= daysInMth; i++) { squares.push(i); }

        //determines left over dat-buckets at month-end (unused are empty)
        if (calendar.sMon && endDay != 0) {
            var blanks = endDay == 6 ? 1 : 7 - endDay;
            for (var i = 0; i < blanks; i++) { squares.push("b"); }
        }
        if (!calendar.sMon && endDay != 6) {
            var blanks = endDay == 0 ? 6 : 6 - endDay;
            for (var i = 0; i < blanks; i++) { squares.push("b"); }
        }


        //create calendar container as a table
        var container = document.getElementById("calendar-container"),
            cTable = document.createElement("table");
        cTable.id = "calendar";
        container.innerHTML = "";
        container.appendChild(cTable);

        //creates calendar table - weeks start on Sunday
        var cRow = document.createElement("tr"),
            cCell = null,
            days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        if (calendar.sMon) { days.push(days.shift()); }
        for (var d of days) {
            cCell = document.createElement("td");
            cCell.innerHTML = d;
            cRow.appendChild(cCell);
        }
        cRow.classList.add("head");
        cTable.appendChild(cRow);

        //calendar day buckets
        var total = squares.length;
        cRow = document.createElement("tr");
        cRow.classList.add("day");
        for (var i = 0; i < total; i++) {
            cCell = document.createElement("td");
            if (squares[i] == "b") { cCell.classList.add("blank"); } else {
                cCell.innerHTML = "<div class='dd'>" + squares[i] + "</div>";
                if (calendar.data[squares[i]]) {
                    cCell.innerHTML += "<div class='event'>" + calendar.data[squares[i]] + "</div>";
                }
                cCell.addEventListener("click", function() {
                    calendar.show(this);
                });
            }
            cRow.appendChild(cCell);
            if (i != 0 && (i + 1) % 7 == 0) {
                cTable.appendChild(cRow);
                cRow = document.createElement("tr");
                cRow.classList.add("day");
            }
        }

        //closes calendar edits
        calendar.close();
    },
    //show calendar (saved) events
    show: function(calEl) {

        //gets current date
        calendar.sDay = calEl.getElementsByClassName("dd")[0].innerHTML;

        //creates calendar form actions
        var tForm = "<h1>" + (calendar.data[calendar.sDay] ? "EDIT" : "ADD") + " EVENT</h1>";
        tForm += "<div id='event-date'>" + calendar.sDay + " " + calendar.mName[calendar.sMth] + " " + calendar.sYear + "</div>";
        tForm += "<textarea id='event-details' required>" + (calendar.data[calendar.sDay] ? calendar.data[calendar.sDay] : "") + "</textarea>";
        tForm += "<input type='button' value='Close' onclick='calendar.close()'/>";
        tForm += "<input type='button' value='Delete' onclick='calendar.del()'/>";
        tForm += "<input type='submit' value='Save'/>";

        //events form - saves on submit
        var eventForm = document.createElement("form");
        eventForm.addEventListener("submit", calendar.save);
        eventForm.innerHTML = tForm;
        var container = document.getElementById("calendar-event");
        container.innerHTML = "";
        container.appendChild(eventForm);
    },

    //close (created) event 
    close: function() {


        document.getElementById("calendar-event").innerHTML = "";
    },
    //saves event
    save: function(event) {
        event.stopPropagation();
        event.preventDefault();
        calendar.data[calendar.sDay] = document.getElementById("event-details").value;
        localStorage.setItem("calendar-" + calendar.sMth + "-" + calendar.sYear, JSON.stringify(calendar.data));
        calendar.list();
    },

    del: function() {
        // cal.del() : Delete event for selected date

        if (confirm("Remove event?")) {
            delete calendar.data[calendar.sDay];
            localStorage.setItem("calendar-" + calendar.sMth + "-" + calendar.sYear, JSON.stringify(calendar.data));
            calendar.list();
        }
    }
};

//gets month & year
window.addEventListener("load", function() {
    //gets current date
    var now = new Date(),
        nowMth = now.getMonth(),
        nowYear = parseInt(now.getFullYear());

    //months
    var month = document.getElementById("calendar-month");
    for (var i = 0; i < 12; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = calendar.mName[i];
        if (i == nowMth) { option.selected = true; }
        month.appendChild(option);
    }

    //10 yr range
    var year = document.getElementById("calendar-year");
    for (var i = nowYear - 10; i <= nowYear + 10; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        if (i == nowYear) { option.selected = true; }
        year.appendChild(option);
    }

    //gets the calendar
    document.getElementById("calendar-set").addEventListener("click", calendar.list);
    calendar.list();
});