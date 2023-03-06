
var f1 = setInterval(dateTime,1000);
function dateTime(){
    var dt = new Date();
    document.getElementById('date-time').innerHTML=dt;
}
