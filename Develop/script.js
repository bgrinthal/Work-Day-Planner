// Global variables
var rowArray = $('.row')

// id per time row
var hour9El = $('9');
var hour10El = $('10');
var hour11El = $('11');
var hour12El = $('12');
var hour13El = $('13');
var hour14El = $('14');
var hour15El = $('15');
var hour16El = $('16');
var hour17El = $('17');


// this functions listens for clicks on save and stores them locally
function saveText() {
    let text = $(this).siblings(".description").val().trim()
    let time = $(this).parent().attr("id")
    localStorage.setItem(time, text)
};
  
// this function changes the rows colors based on the time
function blockColors() {
// stores current hour in variable
    var timeHour = moment().format("HH")
    console.log(timeHour);
// cycles through hours comparing time, determining past, present, or futuer
    for (let i = 0; i < rowArray.length; i++){
        console.log(rowArray.length);
        let blockTime = Number(rowArray[i].id);
        console.log(blockTime);

        if (blockTime < timeHour) {
            rowArray[i].children[1].classList.add("past");
        } else if (blockTime > timeHour) {
            rowArray[i].children[1].classList.add("future");
        } else if (blockTime === timeHour) {
            rowArray[i].children[1].classList.add("present");
        }
    }
}
  
// on click event and starts function
$('.saveBtn').on('click', saveText);
blockColors();

// checks local storage and pulls any saved data 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// displays current date and time
$("#currentDay").text(moment().format("MMM Do, YYYY hh:mm a"));
  

  
  