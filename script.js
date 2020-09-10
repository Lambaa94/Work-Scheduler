$(document).ready(function(){
// Displays Current Time and updates every second
updateTime();
function updateTime() { 
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    setInterval(function(){
        updateTime();
    }, 1000);

};
var timeBlock = [9,10,11,12,13,14,15,16,17];







// When Save Button is Clicked
$(".saveBtn").on("click", function(){

   
    
    for(var i = 0; i < timeBlock.length; i++){
    
        task = localStorage.getItem(timeBlock[i])
        console.log(task);
        
        $(".description").append(task);
        saveTask();
    
        
    };
    
     function saveTask(timeBlock, task){
     localStorage.setItem(timeBlock, task)};
   
     
});



var currentTime = moment().format('HH');

for(var i = 9; i < 17; i++){

    if($("#"[i]) = currentTime ){
        $(".description").append(".present");
        
    } 
    if($("#"[i]) > currentTime){
        
        $(".description").append(".future")

    }
    if($("#"[i]) < currentTime){

        $(".description").append(".past")

    }

};


});




// if(currentTime = timeBlock){

// }


//task = "" is the input


// if time = time then present
// time > time then future
// time < time then past



// var task = $(this).text(".description");



