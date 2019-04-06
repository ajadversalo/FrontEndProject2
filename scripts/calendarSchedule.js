
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function render(schedule) {
    for (var i=0; i<schedule.length; i++) {
        document.write("<thead class='thead-dark'><th>"+ monthNames[schedule[i].month[0].date.getMonth()] + "</th></thead>");
        for(var j=0; j<schedule[i].month.length;j++){
            document.write("<tr><td>" + schedule[i].month[j].date.toDateString());
            document.write("<p>" + schedule[i].month[j].lesson + "</p>");
            document.write("<p>" + schedule[i].month[j].instructor + "</p></td></tr>");
        }
    }
}

var completeSchedule = [
    { 
        month: [
            { date: new Date(2019, 08, 09), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 08, 10), lesson: 'Team Building / Prof Communication', instructor: 'Marlene Delanghe' },
            { date: new Date(2019, 08, 11), lesson: 'OO Programming in C# (Part 1)', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 12), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 13), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 16), lesson: 'OO Programming in C# ', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 17), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 28), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 19), lesson: 'OO Programming in C# ', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 20), lesson: 'Front End Web Design', instructor: 'Michael Whyte' },
            { date: new Date(2019, 08, 25), lesson: 'Front End Web Design', instructor: 'Michael Whyte' },
            { date: new Date(2019, 08, 23), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 24), lesson: 'JavaScript (Part 1)', instructor: 'Jason Harrison' },
            { date: new Date(2019, 08, 25), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 26), lesson: 'OO Programming in C# (Part 1)', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 27), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2019, 08, 30), lesson: 'OO Programming in C# (Part 1)', instructor: 'Pat McGee' }
        ]
    },

    { 
        month: [
            { date: new Date(2019, 09, 01), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 02), lesson: 'Team Building / Prof Communication', instructor: 'Marlene Delanghe' },
            { date: new Date(2019, 09, 03), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 04), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 07), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 18), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 19), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 20), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 21), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 22), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 25), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 26), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 27), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 28), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2019, 09, 29), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' }
        ]
    },    
];

 render(completeSchedule);




