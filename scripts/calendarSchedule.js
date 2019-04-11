
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function render(schedule) {
    for (var i = 0; i < schedule.length; i++) {
        document.write("<thead class='thead-dark'><th>" + monthNames[schedule[i].month[0].date.getMonth()] + "</th></thead>");
        for (var j = 0; j < schedule[i].month.length; j++) {
            document.write("<tr><td>" + schedule[i].month[j].date.toDateString());
            document.write("<p>" + schedule[i].month[j].lesson + "</p>");
            document.write("<p>" + schedule[i].month[j].instructor + "</p></td></tr>");
        }
    }
}

var completeSchedule = [
    {
        month: [
            { date: new Date(2018, 08, 10), lesson: 'Orientation / Study Skills', instructor: 'Pat McGee / Marlene Delanghe' },
            { date: new Date(2018, 08, 11), lesson: 'Team Building / Prof Communication', instructor: 'Marlene Delanghe' },
            { date: new Date(2018, 08, 12), lesson: 'OO Programming in C# (Part 1)', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 13), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 14), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 17), lesson: 'OO Programming in C# ', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 18), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 19), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 20), lesson: 'OO Programming in C# ', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 21), lesson: 'Front End Web Design', instructor: 'Michael Whyte' },
            { date: new Date(2018, 08, 24), lesson: 'Front End Web Design', instructor: 'Michael Whyte' },
            { date: new Date(2018, 08, 25), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 26), lesson: 'JavaScript (Part 1)', instructor: 'Jason Harrison' },
            { date: new Date(2018, 08, 27), lesson: 'Relational Databases', instructor: 'Pat McGee' },
            { date: new Date(2018, 08, 28), lesson: 'OO Programming in C# (Part 1)', instructor: 'Pat McGee' }
        ]
    },
    {
        month: [
            { date: new Date(2018, 09, 01), lesson: 'Relational Databases', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 02), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2018, 09, 03), lesson: 'OO Programming in C#', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 04), lesson: 'Introductory Java Programming', instructor: 'Paul Mills' },
            { date: new Date(2018, 09, 05), lesson: 'OO Programming in C#', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 08), lesson: 'Thanksgiving Day', instructor: '' },
            { date: new Date(2018, 09, 09), lesson: 'Systems Analysis and Design', instructor: 'Pat McGee' },
            { date: new Date(2018, 09, 10), lesson: 'Relational Databases', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 11), lesson: 'Introductory Java Programming', instructor: 'Paul Mills' },
            { date: new Date(2018, 09, 12), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2018, 09, 15), lesson: 'OO Programming in C#', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 16), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2018, 09, 17), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 09, 18), lesson: 'Relational Databases', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 19), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 09, 22), lesson: 'OO Programming in C# ', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 23), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2018, 09, 24), lesson: 'Relational Database', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 25), lesson: 'OO Programming in C#', instructor: 'Phil Weier' },
            { date: new Date(2018, 09, 26), lesson: 'Flex day (no class is currently scheduled but this could change)', instructor: '' },
            { date: new Date(2018, 09, 29), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2018, 09, 30), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2018, 09, 31), lesson: 'C# LINQ and Windows Forms', instructor: 'Pat McGee' },
      
        ]
    },
    {
        //november
        month: [
            { date: new Date(2018, 10, 01), lesson: 'Presentation Skills', instructor: 'Marlene Delanghe' },
            { date: new Date(2018, 10, 02), lesson: 'Angular & React', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 05), lesson: 'C# LINQ and Windows Forms', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 06), lesson: 'JavaScript', instructor: 'Jason Harrison' },
            { date: new Date(2018, 10, 07), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 08), lesson: 'C# LINQ and Windows Forms', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 09), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2018, 10, 12), lesson: 'Remembrance Day - BCIT Closed', instructor: '' },
            { date: new Date(2018, 10, 13), lesson: 'JavaScript', instructor: 'Jason Harrison' },
            { date: new Date(2018, 10, 14), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2018, 10, 15), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2018, 10, 16), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 19), lesson: 'C# LINQ and Windows Forms', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 20), lesson: 'JavaScript', instructor: 'Jason Harrison' },
            { date: new Date(2018, 10, 21), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 22), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2018, 10, 23), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2018, 10, 26), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 27), lesson: 'JavaScript', instructor: 'Jason Harrison' },
            { date: new Date(2018, 10, 28), lesson: 'Angular & React.js', instructor: 'Pat McGee' },
            { date: new Date(2018, 10, 29), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2018, 10, 30), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' }
        ]
    },
    {
        //december
        month: [
            { date: new Date(2018, 11, 03), lesson: 'Project 1 - Phase 1', instructor: 'Pat McGee' },
            { date: new Date(2018, 11, 04), lesson: 'JavaScript', instructor: 'Jason Harrison' },
            { date: new Date(2018, 11, 05), lesson: 'Project 1 - Phase 1', instructor: 'Pat McGee' },
            { date: new Date(2018, 11, 06), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2018, 11, 07), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2018, 11, 10), lesson: 'Project 1 - Phase 1', instructor: 'Pat McGee' },
            { date: new Date(2018, 11, 11), lesson: 'JavaScript', instructor: 'Jason Harrison' },
            { date: new Date(2018, 11, 12), lesson: 'Project 1 - Phase 1', instructor: 'Pat McGee' },
            { date: new Date(2018, 11, 13), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2018, 11, 14), lesson: 'Flex day (no class is currently scheduled but this could change).', instructor: '' }
        ]
    },
    {
        // january
        month: [
            { date: new Date(2019, 00, 07), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2019, 00, 08), lesson: 'ASP.NET – Web API', instructor: 'Pat McGee' },
            { date: new Date(2019, 00, 09), lesson: 'ASP.NET – MVC', instructor: 'Phil Weier' },
            { date: new Date(2019, 00, 10), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2019, 00, 11), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 00, 14), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 00, 15), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 00, 16), lesson: 'ASP.NET – Web API', instructor: 'Pat McGee' },
            { date: new Date(2019, 00, 17), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2019, 00, 18), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 00, 21), lesson: 'ASP.NET – Web API', instructor: 'Pat McGee' },
            { date: new Date(2019, 00, 22), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 00, 23), lesson: 'Web Application Security', instructor: 'Pat McGee' },
            { date: new Date(2019, 00, 24), lesson: 'Android Introduction', instructor: 'Paul Mills' },
            { date: new Date(2019, 00, 25), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 00, 28), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 00, 29), lesson: 'ASP.NET – Web API', instructor: 'Pat McGee' },
            { date: new Date(2019, 00, 30), lesson: 'Web Application Security', instructor: 'Pat McGee' },
            { date: new Date(2019, 00, 31), lesson: 'Android Introduction', instructor: 'Paul Mills' }
        ]
    },
    {
        //February
        month: [
            { date: new Date(2019, 01, 01), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 01, 02), lesson: 'Web Application Security', instructor: 'Pat McGee' },
            { date: new Date(2019, 01, 05), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 01, 06), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 01, 07), lesson: 'ASP.NET – Web API', instructor: 'Pat McGee' },
            { date: new Date(2019, 01, 08), lesson: 'Flex day (no class is currently scheduled but this could change)', instructor: '' },
            { date: new Date(2019, 01, 09), lesson: 'Family Day', instructor: '' },
            { date: new Date(2019, 01, 12), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 01, 13), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 01, 14), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 01, 15), lesson: 'Web Application Security', instructor: 'Pat McGee' },
            { date: new Date(2019, 01, 16), lesson: 'Web Application Security', instructor: 'Pat McGee' },
            { date: new Date(2019, 01, 19), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 01, 20), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 01, 21), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 01, 22), lesson: 'OO PHP & Laravel', instructor: 'Jeff Parker' },
            { date: new Date(2019, 01, 23), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 01, 26), lesson: 'Project 1 - Phase 2', instructor: 'Pat McGee' },
            { date: new Date(2019, 01, 27), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 01, 28), lesson: 'Project 1 - Phase 2', instructor: 'Pat McGee' }
        ]
    },
    {
        //March
        month: [
            { date: new Date(2019, 02, 01), lesson: 'AWS Intro', instructor: 'Pat McGee' },
            { date: new Date(2019, 02, 04), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 02, 05), lesson: 'Project 1 - Phase 2', instructor: 'Pat McGee' },
            { date: new Date(2019, 02, 06), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 02, 07), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 02, 08), lesson: 'AWS Intro', instructor: 'Pat McGee' },
            { date: new Date(2019, 02, 11), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 02, 12), lesson: 'Project 1 - Phase 2', instructor: 'Pat McGee' },
            { date: new Date(2019, 02, 13), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 02, 14), lesson: 'AWS Intro', instructor: 'Pat McGee' },
            { date: new Date(2019, 02, 15), lesson: 'Project 1 - Phase 3', instructor: 'Pat McGee' },
            { date: new Date(2019, 02, 18), lesson: 'March Break', instructor: '' },
            { date: new Date(2019, 02, 19), lesson: 'March Break', instructor: '' },
            { date: new Date(2019, 02, 20), lesson: 'March Break', instructor: '' },
            { date: new Date(2019, 02, 21), lesson: 'March Break', instructor: '' },
            { date: new Date(2019, 02, 22), lesson: 'March Break', instructor: '' },
            { date: new Date(2019, 02, 25), lesson: 'Resume Writing Essentials', instructor: 'Marlene Delanghe' },
            { date: new Date(2019, 02, 26), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 02, 27), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 02, 28), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 02, 29), lesson: 'BCIT Closed Good Friday', instructor: '' }
        ]
    },
    {
        //April
        month: [
            { date: new Date(2019, 03, 01), lesson: 'BCIT Closed Easter Monday', instructor: '' },
            { date: new Date(2019, 03, 02), lesson: 'Project 1 - Phase 3', instructor: 'Pat McGee' },
            { date: new Date(2019, 03, 03), lesson: 'Project 1 - Phase 3', instructor: 'Pat McGee' },
            { date: new Date(2019, 03, 04), lesson: 'iOS Development', instructor: 'Phil Weier' },
            { date: new Date(2019, 03, 05), lesson: 'Project 1 - Phase 3', instructor: 'Pat McGee' },
            { date: new Date(2019, 03, 08), lesson: 'Interview Skills', instructor: 'Marlene Delanghe' },
            { date: new Date(2019, 03, 09), lesson: 'Mock Interviews', instructor: 'Marlene Delanghe/Phil/Pat ' },
            { date: new Date(2019, 03, 10), lesson: 'MEAN (Mongo/ExpressJS/Angular/Node)', instructor: 'Medhat Elmasry' },
            { date: new Date(2019, 03, 11), lesson: 'Flex day (no class is currently scheduled but this could change)', instructor: '' },
            { date: new Date(2019, 03, 12), lesson: 'Front End Web Design/Scripting/Tooling', instructor: 'Michael Whyte' },
            { date: new Date(2019, 03, 15), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 16), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 17), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 18), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 19), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 22), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 23), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 24), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 25), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 26), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 29), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 03, 30), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' }
        ]
    },
    {
        // May
        month: [
            { date: new Date(2019, 04, 01), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 02), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 03), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 06), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 07), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 08), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 09), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' },
            { date: new Date(2019, 04, 10), lesson: 'Industry Project', instructor: 'Pat Mcgee/Phil Weier' }
        ]
    }
];

render(completeSchedule);




