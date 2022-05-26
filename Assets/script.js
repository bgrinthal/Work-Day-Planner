// Global variables
var rowArray = $('.row')

// id per time row, targetting just the hour number
var hour9El = $('#hr-9').attr('id').split('-')[1];
var hour10El = $('#hr-10').attr('id').split('-')[1];;
var hour11El = $('#hr-11').attr('id').split('-')[1];;
var hour12El = $('#hr-12').attr('id').split('-')[1];;
var hour13El = $('#hr-13').attr('id').split('-')[1];;
var hour14El = $('#hr-14').attr('id').split('-')[1];;
var hour15El = $('#hr-15').attr('id').split('-')[1];;
var hour16El = $('#hr-16').attr('id').split('-')[1];;
var hour17El = $('#hr-17').attr('id').split('-')[1];;

console.log(hour9El);
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
        let blockTime = Number(rowArray[i].id.split('-')[1]);
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
$("#hr-9 .description").val(localStorage.getItem("hr-9"));
$("#hr-10 .description").val(localStorage.getItem("hr-10"));
$("#hr-11 .description").val(localStorage.getItem("hr-11"));
$("#hr-12 .description").val(localStorage.getItem("hr-12"));
$("#hr-13 .description").val(localStorage.getItem("hr-13"));
$("#1hr-4 .description").val(localStorage.getItem("hr-14"));
$("#hr-15 .description").val(localStorage.getItem("hr-15"));
$("#hr-16 .description").val(localStorage.getItem("hr-16"));
$("#hr-17 .description").val(localStorage.getItem("hr-17"));

// displays current date and time
$("#currentDay").text(moment().format("MMM Do, YYYY hh:mm a"));
  

  
  