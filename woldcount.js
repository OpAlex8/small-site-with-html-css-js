function getWordCount() {
    var body = top.document.querySelector("body");
    if (body) {
        var content = body.innerText;
        var words = content.split(' ');
        return words.length;
    }
}

function nrWords() {
    setTimeout(nrWords, 333);
    var x = getWordCount();
    document.getElementById("count").innerHTML = "Pagina are " + x + " cuvinte";
}

