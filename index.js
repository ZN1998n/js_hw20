const counterEl = document.querySelector('.counter');
const btnClick = document.querySelectorAll('button');
let counterValue = 0;


btnClick.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')


        switch (btnType) {
            case "plus":
                plus()
                break;

            case "minus":
                minus()
                break;

            case "reset":
                reset()
                break;

            case "random":
                random()
                break;

        }




    }
})


function plus() {
    counterEl.innerHTML = counterValue += 1;

}

function minus() {
    counterEl.innerHTML = counterValue -= 1;

}

function reset() {
    counterEl.innerHTML = counterValue = 0;
}

function random() {
    counterEl.innerHTML = Math.round(Math.random() * (counterValue + 100));
}




const timer = document.querySelector('.time')
const timerBtns = timer.querySelectorAll('button')
const timerScreen = timer.querySelector('h1')
let interval
let seconds = 0
let minutes = 0

timerBtns.forEach(btns => {
    btns.onclick = () => {
        let btnType = btns.getAttribute('data-time')

        switch (btnType) {
            case "start":
                startTimer()
                break;

            case "stop":
                stopTimer()
                break;

            case "reset":
                resetTimer()
                break;

        }



    }
})

function startTimer() {
    clearInterval(interval)

    interval = setInterval(() => {
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        }

        timerScreen.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

    }, 1000);
}
function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {

    clearInterval(interval)

    timerScreen.innerHTML = "00:00"
}



