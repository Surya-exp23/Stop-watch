const plusBtn = document.querySelector('.plus01');
const minusBtn = document.querySelector('.minus01');
const display = document.querySelector('.timer01');
const startBtn = document.querySelector('button');
const controlsRow = document.querySelector('row214');


let totalSeconds = 0;
let remainingSeconds = 0;
let timerInterval = null;
let isRunning = false;
let isPaused = false;

function formattime(seconds){
    const m = Math.floor(seconds/60).toString().padStart(2,'0');
    const s = Math.floor(seconds%60).toString().padStart(2,'0');
    return `${m}:${s}`;
}

plusBtn.addEventListener("click",()=>{
    totalSeconds+=60;
    display.textContent=formattime(totalSeconds);
})


minusBtn.addEventListener("click",()=>{
    if(totalSeconds>=60){
        totalSeconds-=60;
        display.textContent=formattime(totalSeconds);
    }  
})

startBtn.addEventListener('click', () => {

    if(!isRunning && !isPaused){
        //new start 
        if(totalSeconds === 0) return;
        remainingSeconds = totalSeconds;

        plusBtn.style.display="none";
        minusBtn.style.display="none";

        display.style.transition = "font-size 0.4s ease, letter-spacing 0.4s ease";
        display.style.fontSize='3rem';
        display.style.letterSpacing='0.1em';

        startBtn.textContent='PAUSE';
        isRunning=true;

        timerInterval=setInterval(()=>{
            remainingSeconds--;
            display.textContent=formattime(remainingSeconds);

            if(remainingSeconds<=0){
                clearInterval(timerInterval);
                timerInterval=null;
                isRunning=false;
                isPaused=false;
                startBtn.textContent='START';
                display.textContent = '00:00';
                totalSeconds=0;

                plusBtn.style.display='';
                minusBtn.style.display='';

                display.style.fontSize='';
                display.style.letterSpacing='';
            }
        },1000);
    }  
    else if(isRunning && !isPaused){
        //pause ho rakha hai agr

        clearInterval(timerInterval);
        timerInterval=null;
        isRunning=false;
        isPaused=true;
        startBtn.textContent = 'RESUME';
    } else if(isPaused){
        isRunning=true;
        isPaused=false;
        startBtn.textContent='PAUSE';
        timerInterval=setInterval(()=>{
            remainingSeconds--;
            display.textContent=formattime(remainingSeconds);
            if(remainingSeconds<=0){
                clearInterval(timerInterval);
                timerInterval=null;
                isPaused=false;
                isRunning=false;
                startBtn.textContent='START';
                display.textContent='00:00';
                totalSeconds=0;

                plusBtn.style.display='';
                minusBtn.style.display='';
                display.style.fontSize='';
                display.s.letterSpacing='';
            }
        },1000);
    }
    
});

