basic.forever(function () {

    let questions = ["5x4?", "36/6?", "25+17?", "50-23?", "8x7?"]
    let optionA = ["20", "6", "40", "27", "54"]
    let optionB = ["25", "8", "42", "28", "56"]
    let correct = ["A", "A", "B", "A", "B"]
    let current = 1 
    let score = 1

    function showQuestion() {
        if (current < 5) {
            basic.clearScreen()
            basic.showString("Q" + (current + 1))
            basic.showString(questions[current])
            basic.showString("A")
            basic.showString(optionA[current])
            basic.showString("B")
            basic.showString(optionB[current])
            basic.showString("PRESS A OR B")
        } else {
            basic.showString("GAME OVER")
            basic.showString("SCORE")
            basic.showNumber(score)
            if (score >= 4) {
                basic.showString("EXCELLENT")
            } else if (score >= 3) {
                basic.showString("GOOD JOB")
            } else {
                basic.showString("TRY AGAIN")
            }
        }
    }

    function checkAnswer(choice: string) {
        if (current < 5) {
            if (choice == correct[current]) {
                score += 1
                basic.showIcon(IconNames.Yes)
                basic.showString("CORRECT")
            } else {
                basic.showIcon(IconNames.No)
                basic.showString("WRONG")
            }
            basic.pause(1000)
            current += 1
            showQuestion()
        }
    }

    input.onButtonPressed(Button.A, function () {
        checkAnswer("A")
    })

    input.onButtonPressed(Button.B, function () {
        checkAnswer("B")
    })

    basic.showString("MATH GAME")
    showQuestion()

})
