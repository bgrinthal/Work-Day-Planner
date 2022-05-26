var hour9El = $('#hr-9');
var hour10El = $('#hr-10');
var hour11El = $('#hr-11');
var hour12El = $('#hr-12');
var hour13El = $('#hr-13');
var hour14El = $('#hr-14');
var hour15El = $('#hr-15');
var hour16El = $('#hr-16');
var hour17El = $('#hr-17');

$(document).ready(function(){
    // listen for save button clicks
    function whateverClick() {
        // get nearby values
        // store the parent id of the save button (<section> with the id) and store the id as variable and use as key to local storage
        // Hint:  parent id is stored in the id attribute of the parent (google: jquery parent elements)

        // store user input in text area to a variable (grab them using $())
        // hint:  text area is one of the siblings of the clicked button or could be traversed as with one of the children of the parents

        // save key and value in variables in local storage

        // Show notification that item was saved to localStorage by adding class 'show'
        // grab the notification element and add class

        // timeout to remove 'show' class after 5 seconds
        // glodal timeout function that only gets invoked once
    }
    $('.saveBtn').on('click', whateverClick);
    
    function updateWhatever() {-
    }

    // set up interval to check if current time needs to be updated
    var interval = setInterval(updateWhatever, whateverNumberOfSeconds);

    // load any saved data from localStorage
    // Hint: identify each textarea elements using parent id and its class

    // display current day on page using moment js
});


