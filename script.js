// Current time in Military
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

        $("#"+currentId).val(localStorage.getItem(currentId))
        
    });
    
    
    $(".btn").on("click", function(){
        localStorage.clear();
    })
    $(".saveBtn").addClass("fas fa-archive")
});

