document.addEventListener("DOMContentLoaded", function() {

    var timerElement = document.getElementById("timer");


    function updateTimer() {
   
        var currentDate = new Date();

        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

        // Format the date and time
        var formattedDate = `${day}/${month}/${year}`;
        var formattedTime = `${hours}:${minutes}:${seconds}`;

        timerElement.textContent = formattedDate + ", " + formattedTime;
    }

    updateTimer();

    setInterval(updateTimer, 1000);
});
