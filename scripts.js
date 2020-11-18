// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log("The page has fully loaded");

        takeOffButton = document.getElementById("takeoff");
        landButton = document.getElementById("landing");
        abortMissionButton = document.getElementById("missionAbort");
        shuttleStatus = document.getElementById("flightStatus");
        shuttleBackgroundColor = document.getElementById("shuttleBackground");
        shuttleHeight = document.getElementById("spaceShuttleHeight");

    function takingOff() {
        let response = window.confirm("Confirm that the shuttle  is ready for takeoff.");
        if (response) {
            console.log("yeehawwww");
            //flight status = "Shuttle in flight.";
            shuttleStatus.innerHTML = "Shuttle in flight.";
            //#shuttleBackground = blue;
            shuttleBackgroundColor.style.background = "blue";           
            //shuttle height = 10,000 miles;
            shuttleHeight.innerHTML = 10000;


        }
    };
        takeOffButton.addEventListener("click" , takingOff);



});