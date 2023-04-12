let timerWinner = setInterval(function(){
let timer = document.getElementById('timer')
    timer.textContent -= '1';
    if(timer.textContent === '0'){
        clearInterval(timerWinner)
        alert("Вы победили в конкурсе!")
    }
}, 1000)
