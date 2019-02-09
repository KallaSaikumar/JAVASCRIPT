function sleepIn(weekday, vacation) {
    return  !weekday || vacation;
}
function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}

function sumDouble(a, b) {
    if(a == b){
        return 2 * (a + b);
    }
    else{
        return a + b;
    }
}

function diff21(n) {
    if(n > 21){
        return 2 * (n - 21);
    }
    else{
        return 21 - n;
    }
}
function parrotTrouble(talking, hour) {
    return talking && (hour < 7 || hour > 20);
}
function makes10(a, b) {
    return (a == 10 || b == 10 || (a + b) == 10);
}

function nearHundred(n) {
    return (Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10);
}

