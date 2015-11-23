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
        "twitter": "@JosepBoluda",
        "location": "Bilbao, Spain",
    },
    "welcomeMessage": "Seasoned marketing professional with experienced in PM, PM and XYW",
    "skills":[
    "awesomeness", "delivering things", "cryogenic sleep", "getting things done", "html", "javascript"
    ],
    "biopic": "images/fry.jpg",

};

var education = {
    "schools": [{
        "name":"Kellogg School of Management",
        "location":"Evanston, IL",
        "degree":"Master of Business Administration",
        "majors":["Marketing", "Strategy", "Finance", "Managerial Economics"],
        "dates": 2010,
        "url": "http://www.kellogg.northwestern.edu/"
    },{
        "name":"Universidad Politécnica de Valencia",
        "location":"Valencia, Spain",
        "degree":"MSc in Civil Engineering",
        "majors":["Urban Planning"],
        "dates": 2004,
        "url": "https://www.upv.es/"
    }],
    "onlineCourses": [{
        "title":"Introduction to Programming Nanodegree",
        "school":"Udacity",
        "date": 2015,
        "url":"http://udacity.com/"
    },{
        "title":"Front End Development Nanodegree",
        "school":"Udacity",
        "date": 2015,
        "url":"http://udacity.com/"
    }]
};

var work = {
    "jobs":[{
        "employer":"Brammer Iberia, S.A.",
        "title":"Growth and Marketing Head",
        "location":"Bilbao, Spain",
        "dates":"2014 - 2015",
        "description":"Managed the marketing team in order to achieve business growth results"
    },{
        "employer":"Hilti AG",
        "title":"Global Product Manager",
        "location":"Schaan, Liechtenstein",
        "dates":"2010 - 2014",
        "description":"Managed new product development and global portfolio of Diamond Drilling Tools"
    },{
        "employer":"Acciona, S.A.",
        "title":"Head of Production",
        "location":"Valencia, Spain",
        "dates":"2005 - 2008",
        "description":"Managed several construction projects and subprojects, ranging from 4M€ budget to 10M€"
    },{
        "employer":"Okisa, S.A.",
        "title":"Project Manager",
        "location":"Valencia, Spain",
        "dates":"2004 - 2005",
        "description":"Managed Urban Development construction project with a budget of 2.5M€"
    }]
};

var projects = {
    "projects":[{
        "title":"CutAssist Drilling",
        "dates":"2012-2014",
        "description":"Product development of aautomatic, intelligent drilling system",
        "images":["images/fry.jpg","images/fry.jpg"]
    },{
        "title":"CutAssist Drilling",
        "dates":"2012-2014",
        "description":"Product development of aaautomatic, intelligent drilling system",
        "images":["images/fry.jpg","images/fry.jpg"]
    },{
        "title":"CutAssist Drilling",
        "dates":"2012-2014",
        "description":"Product development of aaaautomatic, intelligent drilling system",
        "images":["images/fry.jpg","images/fry.jpg"]
    }]
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
    var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var location = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(github);
    $("#topContacts").append(twitter);
    $("#topContacts").append(location);

    $("#footerContacts").append(mobile);
    $("#footerContacts").append(email);
    $("#footerContacts").append(github);
    $("#footerContacts").append(twitter);
    $("#footerContacts").append(location);

    var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header .text-wrapper").append(bioPic);

    var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header .text-wrapper").append(welcomeMsg);

        $("#header .text-wrapper").append(HTMLskillsStart);
    bio.skills.forEach(function(val){
        var skill = HTMLskills.replace("%data%",val);
        $("#skills").append(skill);
    });
};

work.display = function(){
    work.jobs.forEach(function(job){
        $("#workExperience .text-wrapper").append(HTMLworkStart);
        var workEmployer = HTMLworkEmployer.replace("%data%",job.employer);
        var workTitle = HTMLworkTitle.replace("%data%",job.title);
        var workDates = HTMLworkDates.replace("%data%",job.dates);
        var workLocation = HTMLworkLocation.replace("%data%",job.location);
        var workDescription = HTMLworkDescription.replace("%data%",job.description);
        // description
        $(".work-entry:last").append(workEmployer+workTitle);
        $(".work-entry:last").append(workDates);
        $(".work-entry:last").append(workLocation);
        $(".work-entry:last").append(workDescription);
    });
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

        var schoolMajor = HTMLschoolMajor.replace("%data%",school.majors.join(", "));
        $(".education-entry:last").append(schoolMajor);
    });
    $("#education .text-wrapper").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
        $("#education .text-wrapper").append(HTMLschoolStart);
        var onlineTitle = HTMLonlineTitle.replace("%data%",course.title);
        var onlineSchool = HTMLonlineSchool.replace("%data%",course.school);
        $(".education-entry:last").append(onlineTitle+onlineSchool);
        var onlineDates = HTMLonlineDates.replace("%data%",course.date);
        $(".education-entry:last").append(onlineDates);
        var onlineURL = HTMLonlineURL.replace("%data%",course.url);
        $(".education-entry:last").append(onlineURL);
    });

};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// We add some animation for the hamburger menu


$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());

    $("#nav-trigger").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
    $("#nav-mobile ul li a").click(function(){
        $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
        $(this).removeClass("open");
    });
});

// We finally add an animation so the page will scroll smootly to the sections

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 49
        }, 750);
        return false;
      }
    }
  });
});
