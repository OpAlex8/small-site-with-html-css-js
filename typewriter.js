var i = 0;
var txt = 'Ridicarea la putere.';
var j = txt.length;

function typeWriter() {
    if (i < j) {
        document.getElementById("demo").innerHTML = txt.substring(0, i) + txt.substring(j, txt.length);
        i++;
        j--;
        setTimeout(typeWriter, 100);
    }
    if (i >= j) {
        document.getElementById("demo").innerHTML = txt;
        i++;
        j--;
    }
}