// maybe something with input then id
var currentTime = moment().format('HH');
console.log(currentTime)


$(document).ready(function () {
    // Displays Current Time and updates every second
    updateTime();
    function updateTime() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

        setInterval(function () {
            updateTime();
        }, 1000);

    };


    // When Save Button is Clicked
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var text = $(this).prev().val();
            console.log(text)
       localStorage.setItem($(this).prev().attr("id"),text)

        alert("IT HAS BEEN SAVED")


        console.log($(this))

    });




    $("input").each(function () {
        var currentId = parseInt($(this).attr("id"));
        console.log(currentId)

        if (currentId > currentTime) {
            $(this).addClass("future")

        } else if (currentId == currentTime) {

            $(this).addClass("present")

        }
        else {
            $(this).addClass("past")

        };

         var task = localStorage.getItem($("#"+currentId).val())
         $(currentId).val(task);

    });
})
// 



// var hourSlot = parseInt($(this).attr("id"));
// console.log(hourSlot)
// // Maybe a for loop
//     function colorClock(){


//     colorClock();   


// })



// $(".time-block").each(function(){
// });
// for(var i = 9; i < 18; i++){


// };   


// function saveTask(timeBlock, task){
//     localStorage.setItem(timeBlock, task)};

// if(currentTime = timeBlock){

// }


//task = "" is the input


// var task = $(this).text(".description");



// task = localStorage.getItem(timeBlock[i])
// $(".description").append(task);
//         saveTask();

// var task = $(this).siblings(".description").val();


    // renderText();
    // function renderText() {

    //     var allTasks = localStorage.getItem('userText');

    //     if (!allTasks) {
    //         return
    //     }
    //     $(".description").text(allTasks)
    // }
