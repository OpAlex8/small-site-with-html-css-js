/*
function timespent() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.timespent) {
            localStorage.timespent = Number(localStorage.timespent) + 1;
        } else {
            localStorage.timespent = 0;
        }
        x = localStorage.timespent;
        hrs = parseInt(x/3600);
        mins = parseInt((x/60)%60);
        sec = parseInt(x % 60);
        document.getElementById("timespent").value = hrs + ":" + ((mins > 9) ? mins : "0" + mins) + ":" + ((sec > 9) ? sec : "0" + sec);
    } else {
        document.getElementById("timespent").innerHTML = "Sorry, your browser does not support web storage...";
    }
    window.setTimeout('timespent()',1000);
}
*/
startday = new Date();
clockStart = startday.getTime();
function initStopwatch() {
    var myTime = new Date();
    return((myTime.getTime() - clockStart)/1000);
}
function getSecs() {
    var tSecs = Math.round(initStopwatch());
    var iSecs = tSecs % 60;
    var iMins = Math.round((tSecs-30)/60);
    var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
    document.getElementById("timespent").value = sMins+":"+sSecs;
    window.setTimeout('getSecs()',1000);
}