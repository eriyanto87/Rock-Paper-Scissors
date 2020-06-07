const game = () => {
    let pScore = 0; 
    let cScore = 0;


    //customize name 
    function name() {
    var customName = prompt("Enter Your Name");
    if (customName != null) {
        document.getElementById("name").textContent = customName;
    }
}

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            name();
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand"); 
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            })
        })

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3); 
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                //here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //update images
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
                }, 2000);

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
                })
            })
        }

        //update score
        const updateScore = () => {
            const playerScore = document.querySelector(".player-score p");
            const computerScore = document.querySelector(".computer-score p");
            playerScore.textContent = pScore; 
            computerScore.textContent = cScore;
        };

        const compareHands = (playerChoice, computerChoice) => {
            //update text
            const winner = document.querySelector(".winner");
            //check for a tie
            if (playerChoice === computerChoice) {
                winner.innerHTML = "<img src='assets/tie.png'>";
                return;
            }
            //check for rock
            if (playerChoice === "rock") {
                if (computerChoice === "scissors") {
                    winner.innerHTML = "<img src='assets/win.png'>";
                    pScore++;
                    updateScore();
                    return;
                }else {
                    winner.innerHTML = "<img src = 'assets/lose.png'>";
                    cScore++;
                    updateScore();
                    return;
                }
            }
            //check for paper
            if (playerChoice === "paper") {
                if (computerChoice === "scissors") {
                    winner.innerHTML = "<img src = 'assets/lose.png'>";
                    cScore++;
                    updateScore();
                    return;
                }else {
                    winner.innerHTML = "<img src='assets/win.png'>";
                    pScore++;
                    updateScore();
                    return;
                }
            }
            //check for scissors
            if (playerChoice === "scissors") {
                if (computerChoice === "rock") {
                    winner.innerHTML = "<img src = 'assets/lose.png'>";
                    cScore++;
                    updateScore();
                    return;
                }else {
                    winner.innerHTML = "<img src='assets/win.png'>";
                    pScore++;
                    updateScore();
                    return;
                }
            }
        }

    //call all inner functions
    startGame();
    playMatch();
}

//start game function
game();