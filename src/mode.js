function arrayMode(sequence) {

    sequence = sequence.sort();
    var count = 1;
    var countMode = 1;
    var mode = sequence[0];
    var number = sequence[0];

    for(var i = 1; i <= sequence.length; i++) {
        if(number === sequence[i]) {
            count ++;
        }
        else {
            if (count > countMode) {
                countMode = count;
                mode = number;
            }
            number = sequence[i];
            count = 1;
        }

    }
    return mode;
}

var r = arrayMode([1, 4, 4, 4, 3, 3, 2]);
console.log(r);