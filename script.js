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

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

