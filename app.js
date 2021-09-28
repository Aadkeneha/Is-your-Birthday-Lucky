var birthdate = document.querySelector("#birthdate");
var luckyNum = document.querySelector("#lucky-number");
var btnClick = document.querySelector("#check");
var outputMessage = document.querySelector("#output");

var sum = 0;


btnClick.addEventListener("click", isBirthdayLucky);

function dateToString(birthdate) {
    var dateSplitStr = birthdate.split("-");
    var dateStr = dateSplitStr.join("");
    return dateStr;
}

function sumOfBirthdate(birthDateStr) {
    for (let i = 0; i < birthDateStr.length; i++) {
        sum = sum + Number(birthDateStr[i]);
    }
    return sum;
}

function isBirthdayLucky() {
    var luckyNumber = Number(luckyNum.value);
    var birthDateStr = dateToString(birthdate.value); /"2001-12-07"/
    sum = sumOfBirthdate(birthDateStr);

    if (sum === 0) {
        outputMessage.innerText = "Please enter a valid input!"
    } else if (sum % luckyNumber === 0) {
        outputMessage.innerText = luckyNumber + " is your Lucky Number!";
    } else {
        outputMessage.innerText = luckyNumber + " is not your Lucky Number!";
    }

}