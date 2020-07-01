var putere1 = "Puterea n a unui numar a, notata a<sup>n</sup>, este o operatie dintre aceste numere, numite baza, respectiv exponent. In vorbire a<sup>n</sup> se pronunta a la puterea n, sau, pe scurt, a la n. Daca n este un numar natural, atunci ridicarea la putere poate fi definita ca o inmultire repetata: b<sup>n</sup>=b*b*...*b repetat de n ori."
var putere2 = "Exponentul poate fi mai mic ca zero, poate fi numar neintreg sau chiar complex. Multimea de numere in care ia valori exponentul poate fi extinsa. Astfel puterea cu exponent intreg negativ a unui numar natural sau intreg pozitiv da un numar fractionar sau rational pozitiv. Iar exponentul rational aplicat unei baze naturale produce un numar irational algebric sau radical din baza numar natural. Exponentul unei puteri pozitive a numar pozitiv este redat prin functia logaritm. In jargonul matematicienilor patratul unui numar este puterea a 2-a a acelui numar, iar cubul este puterea a 3-a a numarului respectiv."
var split1 = putere1.split(" ");
var split2 = putere2.split(" ");
var cnt1 = 1;
var cnt2 = 1;
var txt1 = split1[0];
var txt2 = split2[0];
document.getElementById("ridicareLaPutere1").innerHTML = txt1;
document.getElementById("ridicareLaPutere2").innerHTML = txt2;

function scriere() {
    if (cnt1 < split1.length) {
        txt1 = txt1 + ' ' + split1[cnt1];
        document.getElementById("ridicareLaPutere1").innerHTML = txt1;
        cnt1++;
    }
    if (cnt2 < split2.length) {
        txt2 = txt2 + ' ' + split2[cnt2];
        document.getElementById("ridicareLaPutere2").innerHTML = txt2;
        cnt2++;
    }
    setTimeout(scriere, 333);
}