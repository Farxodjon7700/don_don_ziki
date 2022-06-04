const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    madal = document.querySelector(".modal"),
    result = document.querySelector("#result"),
    restart = document.querySelector('#restart');
    scoreBoard = {
        player: 0,
        compyuter: 0,
        drow: 0,
    };
    function play(event) {
        restart.style.display = "inline-block"
        const playerChoice = event.target.id
        const compyuterChoice = getCompyuterChoice()
        const winner = getWinner(playerChoice ,compyuterChoice)
        showWinner(winner, compyuterChoice)
    }
    function getCompyuterChoice() {
        const rand = Math.random()
        if(rand < 0.34){
            return "rock"
        }else if (rand <= 0.67) {
           return "paper" 
        }else{
            return "scissors"
        }
    }
    function getWinner(p, c) {
        if (p === c) {
            return "draw"
        }else if (p === "rock") {
            if (c === "paper") {
                return "campyuter"
            }else{
                return "player"
            }
        }else if (p === "paper") {
            if (c === "scissors") {
                return "campyuter"
            }else{
                return "player"
            }
        }else if (p === "scissors") {
            if (c === "rock") {
                return "campyuter"
            }else{
                return "player"
            }
        }
    }
    function showWinner(winner, campyuterChoice) {
        if (winner === "player") {
            scoreBoard.player++
            result.innerHTML = `
            <h1 class=""text-win>You win</h1>
            <i class="fas fa-hand-${campyuterChoice} fa-10x"></i>
            <P>Compyuter Choise <strong>${campyuterChoice.charAt(0).toUpperCase() + campyuterChoice.slice(1)})</strong> </p>
            `
        }else if (winner === "campyuter") {
            scoreBoard.compyuter++
            result.innerHTML = `
            <h1 class='text-lose'>You lose</h1>
            <i class="fas fa-hand-${campyuterChoice} fa-10x"></i>
            <p>CompyuterChose <strong>${campyuterChoice.charAt(0).toUpperCase() + campyuterChoice.slice(1)})</strong></p>
            `
        }else{
            result.innerHTML = `
            <h1>It's A Draw</h1>
            <i class="fas fa-hand-${campyuterChoice} fa-10x"></i>
            <p>Compyuter chose <strong>${campyuterChoice.charAt(0).toUpperCase() + campyuterChoice.slice(1)})</strong></p>
            `
        }
        score.innerHTML = `
            <p>Palayer: ${scoreBoard.player}</p>
            <p>Comyuter: ${scoreBoard.compyuter}</p>
        `
        madal.style.display = 'block'
    }
    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.compyuter = 0
        score.innerHTML = `
        <p>Palayer: ${scoreBoard.player}</p>
        <p>Comyuter: ${scoreBoard.compyuter}</p>
        `
    }
    function clearModal(event) {
        if (event.target == madal) {
            madal.style.display = 'none'
        }
    }
    choices.forEach(choices => choices.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)

