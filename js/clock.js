const days = document.querySelector("h3#day")
const clock = document.querySelector("h1#clock");
const nal = document.querySelector("h1#nallja");

function getClock(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate()).padStart(2, "0");
    const naljja = date.getDay();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    let nallja;
    if(naljja === 0){
        nallja = "SUN"
    } else if(naljja === 1){
        nallja = "MON"
    } else if(naljja === 2){
        nallja = "TUE"
    } else if(naljja === 3){
        nallja = "WED"
    } else if(naljja === 4){
        nallja = "THU"
    } else if(naljja === 5){
        nallja = "FRI"
    } else if(naljja === 6){
        nallja = "SAT"
    }

    days.innerHTML = `${year}. ${month}. ${day}`
    nal.innerHTML = `${nallja}`
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);