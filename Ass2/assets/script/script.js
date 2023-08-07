var dogCards = [document.querySelector(".dog1"), document.querySelector(".dog2"), document.querySelector(".dog3")];
var selectedDog;

const chooseTime = document.getElementById("cyt");
const dogWrapper = document.getElementById("dog-wrapper");

var dogPostition = 1;

function changeFocus() {
    if(dogPostition < 2) {
        dogCards[dogPostition].dataset.status = "inactive";
        dogCards[dogPostition + 1].dataset.status = "active";   
        dogPostition++;
        dogWrapper.style.margin = "0px";
        if(dogPostition == 2) {
            dogWrapper.style.margin = "0px 400px 0px 0px";
        }
    } else {
        console.log("nope");
    }
}

function changeFocusBack() {
    if(dogPostition > 0) {
        dogCards[dogPostition].dataset.status = "inactive";
        dogCards[dogPostition - 1].dataset.status = "active";
        dogPostition--;
        dogWrapper.style.margin = "0px";
        if(dogPostition == 0) {
            dogWrapper.style.margin = "0px 0px 0px 400px";
        }
    }
}

function nextStep() {
    chooseTime.scrollIntoView(true);
    chooseTime.style.opacity = "100%";
    selectedDog = dogCards[dogPostition];
    const dogName = window.getComputedStyle(dogCards[dogPostition], '::after');
    console.log(dogName.content);
}

//Date Object
const activeDate = new Date();
const activeTime = Number(activeDate.getHours());

//Selecting relevant time related elements
var times = document.querySelectorAll(".time-schedulable");
var timeArray = Array.from(times);
var chosenTime;
var buttonsAll = document.querySelectorAll(".time-choice");
var buttonClicked = Array.from(buttonsAll);
var i;

//Determining the user's closest time
for (i = 0; i < timeArray.length; i++) {
    if(timeArray[i].dataset.index > activeTime + 1) {
        timeArray[i].dataset.called = "true";
        chosenTime = timeArray[i];
        console.log(timeArray[i].dataset.called);
        break
    } 
}

//Reselecting time
function changeTime(index) {
    const useableTimeFrameWork = timeArray[index].dataset.index;
    if(chosenTime.dataset.index != useableTimeFrameWork) {
        chosenTime.dataset.called = "false";
        timeArray[useableTimeFrameWork].dataset.called = "true";
        chosenTime = timeArray[useableTimeFrameWork];
        console.log(useableTimeFrameWork);
        for(i = 0; i < timeArray.length; i++) {
            if(i != chosenTime.dataset.index) {
                timeArray[i].style.visibility = "hidden";
            }
        }
    } 
}
function changeOpacityAll() {
    for(i = 0; i < timeArray.length; i++) {
        if(i != chosenTime.dataset.index) {
            timeArray[i].style.visibility = "visible";
        }
    }
}