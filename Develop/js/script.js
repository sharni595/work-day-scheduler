//make date at top adjust each day to show current date
var currentDate = document.querySelector("#currentDay");
currentDate.textContent = moment().format("dddd, Do MMMM");



//change span to input on click to allow text 
//on blur change back to span

$(".saveBtn").on("click", function(){
    var task = $(this)
        .siblings(".description")
        .val();

    console.log(task);
    //create another for parent element to grab id. pass function to save to local storage on click
    var save = $(this)
        .siblings(".description")
        .attr("id")
    console.log(save);

    localStorage.setItem(save, task);
    
});

//if past: grey. if present: red. if future: green.
function timeAlert(){
    //moment function to create time association for each hour
    
    for (i = 9; i < 18; i++){
       
        if (moment().format("H") > i){
            $(`#${i}`).addClass("past");
        } else if (moment().format("H") < i){
            $(`#${i}`).addClass("future");
        } else{
            $(`#${i}`).addClass("present");
        };
         
        $(`#${i}`)
            .val(localStorage.getItem(i));
    }      
};
//if button clicked, add to local storage. Retrieve from local storage and 
//display in specified time




timeAlert();
//template literals