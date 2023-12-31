let hr = min = sec = ms = "0" + 0,
startTimer;

document.querySelector(".start").addEventListener("click", start);
document.querySelector(".stop").addEventListener("click", stop);
document.querySelector(".reset").addEventListener("click", reset);

function start() {
    startTimer = setInterval(() => {
      ms++
      ms = ms < 10 ? "0" + ms : ms;

      if(ms == 100){
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        ms = "0" + 0;
      }
      if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }
      if(min == 60){
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
        min = "0" + 0;
      }

      putValue()

    },10);
}

function stop() {
    clearInterval(startTimer);
}

function reset() {
    clearInterval(startTimer);
    let hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue() {
    document.querySelector(".msecs").innerText = ms;
    document.querySelector(".secs").innerText = sec;
    document.querySelector(".mins").innerText = min;
    document.querySelector(".hour").innerText = hr;
}










