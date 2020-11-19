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
        rocketImage = document.getElementById("rocket");
        upButton = document.getElementById("up");
        downButton = document.getElementById("down");
        leftButton = document.getElementById("left");
        rightButton = document.getElementById("right");

    function takingOff() {
        let response = window.confirm("Confirm that the shuttle  is ready for takeoff.");
        if (response) {
            console.log("Yeehawwww!!");
            //flight status = "Shuttle in flight.";
            shuttleStatus.innerHTML = "Shuttle in flight.";
            //#shuttleBackground = blue;
            shuttleBackgroundColor.style.background = "blue";           
            //shuttle height = 10,000 miles;
            shuttleHeight.innerHTML = 10000;
        }
    };
        takeOffButton.addEventListener("click", takingOff);

    function landingHo() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        //flight status = "The shuttle has landed.";
        shuttleStatus.innerHTML = "The shuttle has landed";
        //shuttleBackground = green;
        shuttleBackgroundColor.style.background = "green";
        //shuttle height = 0 miles;
        shuttleHeight.innerHTML = 0;
    };
        landButton.addEventListener("click", landingHo);

    function abortingMission() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            console.log("Niner-niner, we're abortin' the mission'.");
            //flight status = "Mission aborted";
            shuttleStatus.innerHTML = "Mission aborted.";
            //shuttleBackground = green;
            shuttleBackgroundColor.style.background = "green";
            //shuttle height = 0 miles;
            shuttleHeight.innerHTML = 0;
        }
    };
        abortMissionButton.addEventListener("click", abortingMission);

        function flyUp() {
            console.log("testing");
            rocketImage.style.bottom-margin += 10px
        }
            upButton.addEventListener("click", flyUp);
        
        function flyDown() {
            //use margin-top to push down
        }
            downButton.addEventListener("click", flyDown);
        
        function flyLeft() {
            //use margin-right to push left
        }
            leftButton.addEventListener("click", flyLeft);
    
        function flyRight() {
            //use margin-left to push right
        }
            rightButton.addEventListener("click", flyRight);


});