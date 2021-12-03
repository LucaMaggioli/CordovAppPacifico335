const hours = [];
for(i=1; i<= 12; i++){
    hours.push(i);
}
const minutes = [];
for(i=1; i<= 60; i++){
    minutes.push(i);
}
const seconds = minutes;

let divTime = document.getElementById('div-time');
let btnCreateTimer = document.getElementById('btn-create-timer');
let btnSetTimer = document.getElementById('btn-set-timer');
let shader = document.getElementById('shader');


btnCreateTimer.addEventListener("click", openTimerSettings);
btnSetTimer.addEventListener('click', closeTimerSettings);
shader.addEventListener('click', closeTimerSettings);

window.setInterval(updateDivTime, 1000);
setSelectOptions('slct-hours', hours);
setSelectOptions('slct-minutes', minutes);
setSelectOptions('slct-seconds', seconds);

function updateDivTime(){
    divTime.innerHTML = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds().toString();
}

function createNewTimer(){

}

function openTimerSettings(){
    console.log('try yopen popup');
    let timerSettings = document.getElementById('timer-settings');
    timerSettings.style.display = 'block';
    let shader = document.getElementById('shader');
    shader.style.display ='block';
}

function closeTimerSettings(){
    console.log('try close popup');
    let timerSettings = document.getElementById('timer-settings');
    timerSettings.style.display = 'none';
    let shader = document.getElementById('shader');
    shader.style.display ='none';
}

function setSelectOptions(selectId, options){
    let optionsAsString = "";

    for (option in options){
        optionsAsString += "<option value='" + option + "'>" + option + "</option>";
    }
    document.getElementById(selectId.toString()).insertAdjacentHTML("afterbegin", optionsAsString);
}