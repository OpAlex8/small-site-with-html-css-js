function onSubmit(){
    var score = 0;
    var q1 = [];
    var q2 = [];
    var q3 = [];
    var nrQ = 3;
    var q1ansArr = ['b', 'd'];
    var q2ansArr = ['b', 'c', 'e'];
    var q3ansArr = ['d'];

    for (var i = 0; i < 5; ++i) {
        if (document.forms['quiz']['q1cb' + (i + 1)].checked) {
            q1.push(document.forms['quiz']['q1cb' + (i + 1)].value);
        }
    }

    for (var i = 0; i < 5; ++i) {
        if (document.forms['quiz']['q2cb' + (i + 1)].checked) {
            q2.push(document.forms['quiz']['q2cb' + (i + 1)].value);
        }
    }

    for (var i = 0; i < 5; ++i) {
        if (document.forms['quiz']['q3cb' + (i + 1)].checked) {
            q3.push(document.forms['quiz']['q3cb' + (i + 1)].value);
        }
    }


    var isCorrect;
    for (var i = 1; i <= nrQ; ++i) {
        if (eval('q' + i).length == eval('q' + i + 'ansArr').length) {
            isCorrect = true;
            for (j = 0; j < eval('q' + i).length; ++j) {
                if (eval('q' + i)[j] != eval('q' + i + 'ansArr')[j]) {
                    isCorrect = false;
                    break;
                }
            }
            if (isCorrect == true) {
                score ++;
            }
        }
        for (var j = 1; j <= 5; ++j) {
            str = 'Checkq' + i.toString() + 'cb' + j.toString();
            document.getElementById(str).disabled = true;
        }
    }
    document.getElementById('button').disabled = true;
    if (score == 0) {
        alert('Nu ai niciun raspuns corect');
    } else if (score == 1) {
        alert('Ai un raspuns corect din ' + nrQ + ' intrbari');
    } else {
        alert('Ai ' + score + '/' + nrQ + ' raspunsuri corecte  ');
    }
    return false;
}