/**
 * Reverse a string
 **/

function reverse1(string) {
    var result = '';
    for(var i = string.length-1;  i >= 0; i--) {
        result += string[i];
    }
    return result;
}

/**
 * With while loop
 * @param string
 * @returns {string}
 */
function reverse2 (string) {
    var count = string.length-1;
    var result = '';
    while (count >= 0) {
        result += string[count];
        count --;
    }
    return result;
}

/**
 * With inbuilt functions
 * @param string
 * @returns {string}
 */
function reverse3 (string) {
    return string.split('').reverse().join('');
}

function reverse4 (string) {
    var result = [];
    for(var i = string.length- 1, j = 0; i >= 0; i--, j++) {
        result[j] = string[i];
    }
    return result.join('');
}

function  reverse5 (string) {
    var result = [];
    for(var i= 0, len=string.length; i <= string.length; i++) {
        result.push(string.charAt(len-i));
    }
    return result.join('');
}


function reverse6 (string) {
    var length = string.length;
    var result = '';
    while (length > 0) {
        result += string.substring(length-1, length);
        length --;
    }
    return result;
}


function  reverse7 (string) {
    for(var i = string.length- 1, result = ''; i >= 0; result += string [i--]) {}
    return result;
}

function reverse8 (string) {
    return (string === '') ? '' : reverse8(string.substr(1)) + string.charAt(0);
}


//TODO
function reverse9 (string) {
    var len = string.length;
    for (var i = 0; i < len / 2; ++i) {
        var temp = string[i];
        string[i] = string[len - i];
        string[len - i] = temp;
    }
    return string;
}



var r = reverse9('hi there');
console.log(r);