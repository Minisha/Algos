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


var r = reverse3('hi there');
console.log(r);