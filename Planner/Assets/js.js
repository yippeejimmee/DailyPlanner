var date = $('#currentDay');
var timeContainer = $('.container')
var timeFrame = $('.timeFrame')
var timeSlots = [
    0800,
    0900,
    1000,
    1100,
    1200,
    1300,
    1400,
    1500,
    1600,
    1700,
]

//utilize moment.js to get the current date and display at top of page
setInterval(function () {
    var todayDate = moment().format('MMM Do, YYYY')
    date.text(todayDate);
}, 1000);


function loadPlanner() {
    //loop through every timeslot in the array and produce a div
    for (var i = 0; i < timeSlots.length; i++) {
        //change the slot times to only take the integers that present hours for comparison with moment.js
        var hourTime = timeSlots[i] / 100;
        //change the time from moment.js to an integer for comparison
        var currentHour = parseInt(moment().format('HH'));

        //creating a div for each time slot and adding it to the container
        var eachHourEl = $('<div>');
        timeContainer.append(eachHourEl);
        eachHourEl.addClass('row time-block');

        //creating a <p>, <div> for input, and <div> for save button for each time slot
        $('<p>', {
            class: "hour",
            text: timeSlots[i]
        }, ).appendTo(eachHourEl);
        $('<div>', {
            class: "input",
            text: ""
        }).appendTo(eachHourEl);
        $('<div>', {
            class: "saveBtn fa fa-save"
        }).appendTo(eachHourEl);



        var input = $('.input');
        //comparing the timeslot with current hour applying appropriate class
        if (hourTime == currentHour) {
            input.addClass('present');
        } else if (hourTime < currentHour) {
            input.addClass('past');
        } else {
            input.addClass('future');
        }
    }
    textInput()

    //function colorChange(){
}
//adding a text input type to the input 
function textInput() {
    $('<input>').attr({
        type: 'text',
    }).appendTo('.input');
}
/*   var timeSlotTemplate = `
    <p class="hour">${timeSlots[i]}</p>`
    eachHourEl.append(timeSlotTemplate);
    timeContainer.append(eachHourEl);

*/
loadPlanner()
//timeContainer.html('<table>Hello</table>')