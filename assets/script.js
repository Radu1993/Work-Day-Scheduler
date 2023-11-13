$(document).ready(function () {
    console.log("Ready");
});

// Display the current day
let now = moment().format("dddd, MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;
let currentHour = moment().format("HH");

//Past , present and futurre timeblock
$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(thi).children(".description").addClass("present");
    } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

//Save the event in local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});

//timeblocks for standard business hours
$("#hour-09 .time-block").val(localStorage.getItem("hour-09"));
$("#hour-10 .time-block").val(localStorage.getItem("hour-10"));
$("#hour-11 .time-block").val(localStorage.getItem("hour-11"));
$("#hour-12 .time-block").val(localStorage.getItem("hour-12"));
$("#hour-13 .time-block").val(localStorage.getItem("hour-13"));
$("#hour-14 .time-block").val(localStorage.getItem("hour-14"));
$("#hour15 .time-block").val(localStorage.getItem("hour-15"));
$("#hour16 .time-block").val(localStorage.getItem("hour-16"));
$("#hour17 .time-block").val(localStorage.getItem("hour-17"));

$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textArea").val("");
    localStorage.clear();
});