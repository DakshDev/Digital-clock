let hour = document.getElementById('hour');
let minute = document.getElementById('min');
let second = document.getElementById('sec');
let sup = document.getElementById('sup');

function reload(){
requestAnimationFrame(reload);

let date = new Date();
let getHour = date.getHours();
let getMin = date.getMinutes();
let getSec = date.getSeconds();

if(getHour == 12){
    sup.innerHTML = 'pm';
}else if(getHour == 13){
    getHour = 1;
    sup.innerHTML = 'pm';
}else if(getHour == 14){
    getHour = 2;
    sup.innerHTML = 'pm';
}else if(getHour == 15){
    getHour = 3;
    sup.innerHTML = 'pm';
}else if(getHour == 16){
    getHour = 4;
    sup.innerHTML = 'pm';
}else if(getHour == 17){
    getHour = 5;
    sup.innerHTML = 'pm';
}else if(getHour == 18){
    getHour = 6;
    sup.innerHTML = 'pm';
}else if(getHour == 19){
    getHour = 7;
    sup.innerHTML = 'pm';
}else if(getHour == 20){
    getHour = 8;
    sup.innerHTML = 'pm';
}else if(getHour == 21){
    getHour = 9;
    sup.innerHTML = 'pm';
}else if(getHour == 22){
    getHour = 10;
    sup.innerHTML = 'pm';
}else if(getHour == 23){
    getHour = 11;
    sup.innerHTML = 'pm';
}else if(getHour == 0){
    getHour = '00';
}

// Add extra zero in before
if(getMin == 0){
    getMin = '00';
}else if(getMin < 10){
    getMin = '0'+getMin;
}

// Add extra zero in before
if(getSec == 0){
    getSec = '00';
}else if(getSec < 10){
    getSec = '0'+getSec;
}

hour.innerHTML = getHour;
minute.innerHTML = getMin;
second.innerHTML = getSec;



// Life Cycle
let cycleBox = document.getElementById('cycle');
if(getHour == 7 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(15deg)';
}else if(getHour == 8 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(30deg)';
}else if(getHour == 9 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(45deg)';
}else if(getHour == 10 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(60deg)';
}else if(getHour == 11 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(75deg)';
}
else if(getHour == 12 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(90deg)';
}else if(getHour == 1 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(105deg)';
}else if(getHour == 2 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(120deg)';
}else if(getHour == 3 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(135deg)';
}else if(getHour == 4 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(150deg)';
}else if(getHour == 5 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(165deg)';
}else if(getHour == 6 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(180deg)';
}else if(getHour == 7 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(195deg)';
}else if(getHour == 8 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(210deg)';
}else if(getHour == 9 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(225deg)';
}else if(getHour == 10 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(240deg)';
}else if(getHour == 11 && sup.innerHTML == 'pm'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(255deg)';
}
else if(getHour == 0 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(270deg)';
}else if(getHour == 1 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(285deg)';
}else if(getHour == 2 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(300deg)';
}else if(getHour == 3 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(315deg)';
}else if(getHour == 4 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(330deg)';
}else if(getHour == 5 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(345deg)';
}else if(getHour == 6 && sup.innerHTML == 'am'){
cycleBox.style.transform = 'translate(-50%, -50% ) rotate(360deg)';
}

}
requestAnimationFrame(reload);