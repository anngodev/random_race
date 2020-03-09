/* RANDOM RACE JS */

// GO BUTTON

$("#go").click(function() {
    
    // WIDTH OF CARS
    var carWidth = $("#car1").width();
    
    // WIDTH OF RACETRACKS -  WIDTH OF CARS
    var raceTrackWidth = $(window).width() - carWidth;
    
    // GENERATE RANDOM NUMBER BETWEEN 1 AND 5000 (milliseconds)
    var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
    
    var raceTime2 = Math.floor( (Math.random() * 5000) + 1);
                               
    // SET A FLAG VARIABLE TO FALSE BY DEFAULT
    var isComplete = false;
                               
    // SET FLAG VARIABLE TO FIRST BY DEFAULT
    var place = "first";
    
    // ANIMATE CAR 1
    $("#car1").animate({
       // MOVE THE CAR THE WIDTH OF THE RACETRACK
        left: raceTrackWidth,
        
        
    }, raceTime1, function() {
        
        // ANIMATION IS COMPLETE
        
        // RUN FUNCTION
        
    });
                               
});