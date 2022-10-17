import * as MODEL from "./model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("hash " + pageID);
    
    if (pageID == "") {
        MODEL.changePage("home");
      } else {
            MODEL.changePage(pageID);
        }
}

function initApp () {
    $(window).on("hashchange", route);
    route();
}       


function init() {
    $("#login").on("click", function(e) {
        console.log("on");

        e.preventDefault();

        // Login information
        let em_one = $("#lemail").val();
        let pw_one = $("#lpword").val();


        if(em_one == "") {
            alert("Please enter your email")
            console.log("email_one");
        }else if (pw_one == "") {
            alert("Please enter your password")
            console.log("password_one");
        }else{
            alert("You have successfully logged in")
            console.log("success");
        } 
    });
}

function initTwo() {
    $("#signup").on("click", function(e) {
        console.log("on");

        e.preventDefault();

        // sign up information
        let fn = $("#fn").val();
        let ln = $("#ln").val();
        let ea = $("#ea").val();
        let pw_two = $("#pw").val();


        if (fn == "") {
            alert("Please enter your first name")
        }else if (ln == "") {
            alert("Please enter your last name")
        }else if (ea == "") {
            alert("Please enter your email address")
        }else if (pw_two == "") {
            alert("Please enter your password")
        }else{
            alert("You have successfully created an account" )

              console.log("success");
        }
        
    });
}



function initListeners() {}
 
$(document).ready(function () {
    console.log("ready")
    initApp();
    init();
    initTwo();
});