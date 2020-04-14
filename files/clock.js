function startTime() {
    var today = new Date();
    var weekday = today.getDay(); 
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    hour = checkTime(hour);
    minutes = checkTime(minutes);
    
    document.getElementById("date").innerHTML = days[weekday] + ", " + months[month] + " " + day + ", " + year;
    document.getElementById("clock").innerHTML = hour + ":" + minutes;
    var today2 = new Date().getHours();

    setTimeout(function(){startTime()}, 500)
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
