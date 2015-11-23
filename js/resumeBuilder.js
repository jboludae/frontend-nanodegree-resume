/*
This is empty on purpose! Your code to build the r{{esume will go here.
 */

var bio = {
    "name": "Josep Boluda",
    "role": "Marketing Manager",
    "contacts":{
        "mobile": "+34 663 655 783",
        "email": "jboludae@gmail.com",
        "github": "jboludae",
        "location": "Bilbao, Spain",
    },
    "bioPic": "images/fry.jpg",
    "welcomeMsg":"Seasoned marketing professional with experienced in PM, PM and XYW",
    "skills":[
    "awesomeness", "delivering things", "cryogenic sleep", "getting things done", "html", "javascript"
    ]
};

var work = {
    "jobs":[
    {
        "employer":"Brammer Iberia, S.A.",
        "title":"Growth and Marketing Head",
        "location":"Bilbao, Spain",
        "dates":"2014 - 2015",
        "description":"Managed the marketing team in order to achieve business growth results"
    },
    {
        "employer":"Hilti AG",
        "title":"Global Product Manager",
        "location":"Schaan, Liechtenstein",
        "dates":"2010 - 2014",
        "description":"Managed new product development and global portfolio of Diamond Drilling Tools"
    },
    {
        "employer":"Acciona, S.A.",
        "title":"Head of Production",
        "location":"Valencia, Spain",
        "dates":"2005 - 2008",
        "description":"Managed several construction projects and subprojects, ranging from 4M€ budget to 10M€"
    },
    {
        "employer":"Okisa, S.A.",
        "title":"Project Manager",
        "location":"Valencia, Spain",
        "dates":"2004 - 2005",
        "description":"Managed Urban Development construction project with a budget of 2.5M€"
    }
    ]
};

var projects = {
    "projects":[
    {
        "title":"CutAssist Drilling",
        "dates":"2012-2014",
        "description":"Product development of aautomatic, intelligent drilling system",
        "images":["images/fry.jpg","images/fry.jpg"]
    },
    {
        "title":"CutAssist Drilling",
        "dates":"2012-2014",
        "description":"Product development of aaautomatic, intelligent drilling system",
        "images":["images/fry.jpg","images/fry.jpg"]
    },
    {
        "title":"CutAssist Drilling",
        "dates":"2012-2014",
        "description":"Product development of aaaautomatic, intelligent drilling system",
        "images":["images/fry.jpg","images/fry.jpg"]
    }
    ]
};

var education = {
    "schools": [
    {
        "name":"Kellogg School of Management",
        "location":"Evanston, IL",
        "degree":"Master of Business Administration",
        "major":"Marketing, Strategy, Finance, Managerial Economics",
        "dates": "2008 - 2010",
        "url": "http://www.kellogg.northwestern.edu/"
    },
    {
        "name":"Universidad Politécnica de Valencia",
        "location":"Valencia, Spain",
        "degree":"MSc in Civil Engineering",
        "major":"Urban Planning",
        "dates": "1998-2004",
        "url": "https://www.upv.es/"
    }
    ],
    "onlineCourses": [
    {
        "title":"Introduction to Programming Nanodegree",
        "school":"Udacity",
        "dates":"2015",
        "url":"http://udacity.com/"
    },
    {
        "title":"Front End Development Nanodegree",
        "school":"Udacity",
        "dates":"2015",
        "url":"http://udacity.com/"
    }
    ]
};

bio.display = function(){

    var headerRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header .text-wrapper").prepend(headerRole);

    var headerName = HTMLheaderName.replace("%data%",bio.name);
    $("#header .text-wrapper").prepend(headerName);

// How can I avoid repetition here?
    var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var email = HTMLemail.replace("%data%",bio.contacts.email);
    var github = HTMLgithub.replace("%data%",bio.contacts.github);
    var location = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(github);
    $("#topContacts").append(location);

    $("#footerContacts").append(mobile);
    $("#footerContacts").append(email);
    $("#footerContacts").append(github);
    $("#footerContacts").append(location);

    var bioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header .text-wrapper").append(bioPic);

    var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header .text-wrapper").append(welcomeMsg);

        $("#header .text-wrapper").append(HTMLskillsStart);
    bio.skills.forEach(function(val){
        var skill = HTMLskills.replace("%data%",val);
        $("#skills").append(skill);
    });
};

function displayWork(){
    for (job in work.jobs){
        $("#workExperience .text-wrapper").append(HTMLworkStart);
        var workEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var workTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var workDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var workLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var workDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        // description
        $(".work-entry:last").append(workEmployer+workTitle);
        $(".work-entry:last").append(workDates);
        $(".work-entry:last").append(workLocation);
        $(".work-entry:last").append(workDescription);
    };
};


projects.display = function(){
    projects.projects.forEach(function(project){
        $("#projects .text-wrapper").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%",project.title);
        var projectDates = HTMLprojectDates.replace("%data%",project.dates);
        var projectDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(projectTitle+projectDates+projectDescription);

        project.images.forEach(function(image){
            var projectImage = HTMLprojectImage.replace("%data%",image);
            console.log(projectImage);
            $(".project-entry:last").append(projectImage);
        });
    });
};

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

education.display = function(){
    education.schools.forEach(function(school){
        $("#education .text-wrapper").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%",school.name);
        var schoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
        $(".education-entry:last").append(schoolName+schoolDegree);

        var schoolDates = HTMLschoolDates.replace("%data%",school.dates);
        $(".education-entry:last").append(schoolDates);

        var schoolLocation = HTMLschoolLocation.replace("%data%",school.location);
        $(".education-entry:last").append(schoolLocation);

        var schoolMajor = HTMLschoolMajor.replace("%data%",school.major);
        $(".education-entry:last").append(schoolMajor);
    });
    $("#education .text-wrapper").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
        $("#education .text-wrapper").append(HTMLschoolStart);
        var onlineTitle = HTMLonlineTitle.replace("%data%",course.title);
        var onlineSchool = HTMLonlineSchool.replace("%data%",course.school);
        $(".education-entry:last").append(onlineTitle+onlineSchool);
        var onlineDates = HTMLonlineDates.replace("%data%",course.dates);
        $(".education-entry:last").append(onlineDates);
        var onlineURL = HTMLonlineURL.replace("%data%",course.url);
        $(".education-entry:last").append(onlineURL);
    });

};


displayWork();
bio.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);



