const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: 'What would your ideal weekend look like? ',
    choice1: 'Relaxing, hanging out with friends',
    choice2: 'Productive, get more work done AHEAD OF TIME!',
    choice3: 'I don’t know, it really depends on how I feel each week',
    choice4: 'Sleeping, because I am always tired',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What do you drink when you’re not drinking boba?',
    choice1: 'I ONLY DRINK BOBA because I am a boba-enthusiast',
    choice2: 'I would drink water because it is healthy',
    choice3: 'COFFEE!!!',
    choice4: 'Anything tea related',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What is your favorite place to visit on vacation?',
    choice1: 'Amsterdam, Netherlands',
    choice2: 'Oui, oui Paris',
    choice3: 'Tokyo, Japan',
    choice4: 'London, England',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What would a day with your friends be like?',
    choice1: 'Go to the park and play on the swings. THEY ARE AWESOME.',
    choice2: 'We are fashionistas, we got to go SHOPPING!!!',
    choice3: 'Wherever the latest game/club is HAPPENING.',
    choice4: 'Playing chess at home because I am a KING.',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What would you pick up if you go to the mall?',
    choice1: 'The latest Boba Squishmallows for my collection.',
    choice2: 'A new Boba phone case.',
    choice3: 'Lots of gift cards from my favorite Boba Shop.',
    choice4: 'A large hot cup of Lavender Boba, please!',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What is your horoscope?',
    choice1: 'Aries, Sagittarius, Gemini',
    choice2: 'Pisces, Scorpio, Leo',
    choice3: 'Taurus, Libra, Aquarius',
    choice4: 'Cancer, Capricorn, Virgo',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What is your favorite breakfast?',
    choice1: 'A glass of milk and a bowl of cereal!',
    choice2: 'A cheese and ham sandwich sounds delish!',
    choice3: 'Avocado Toast, yummy!',
    choice4: 'No breakfast for me, just some Tea or Coffee!',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'How do you eat your cereal?',
    choice1: 'Pour in Milk first, then Cereal',
    choice2: 'I drown my cereal in coffee',
    choice3: 'Pour in Cereal first, then Milk',
    choice4: 'I am lactose intolerant. No milk… please',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'If you could only wear one color for the rest of your life, what would it be?',
    choice1: 'Red like Apples!',
    choice2: 'Yellow like the sun!',
    choice3: 'Black as a soul!',
    choice4: 'Gray like clouds!',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  },
  {
    question: 'What is your pick?',
    choice1: 'RAINBOW JELLY!!!',
    choice2: 'Black Grass Jelly',
    choice3: 'Chewy Tapioca',
    choice4: 'No Toppings',
    answer: 1,
    answer2: 2,
    answer3: 3,
    answer4: 4,
  }
]
//change so diff answers have diff points
const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem('mostRecentScore',  score)
    return window.location.assign('/end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
  
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' /*change to multiple ans*/

    let classToApply2 = selectedAnswer == currentQuestion.answer2 ? 'correct' : 'incorrect' /*change to multiple ans*/

    let classToApply3 = selectedAnswer == currentQuestion.answer3 ? 'correct' : 'incorrect' /*change to multiple ans*/

    let classToApply4 = selectedAnswer == currentQuestion.answer4 ? 'correct' : 'incorrect' /*change to multiple ans*/

    if(classToApply === 'correct'){
      incrementScore(SCORE_POINTS)
    } /*change this to score points*/

    if(classToApply2 === 'correct'){
      incrementScore(SCORE_POINTS)
      incrementScore(SCORE_POINTS)
    } /*change this to score points*/
    
    if(classToApply3 === 'correct'){
      incrementScore(SCORE_POINTS)
      incrementScore(SCORE_POINTS)
      incrementScore(SCORE_POINTS)
    } /*change this to score points*/
    
    if(classToApply4 === 'correct'){
      incrementScore(SCORE_POINTS)
      incrementScore(SCORE_POINTS)
      incrementScore(SCORE_POINTS)
      incrementScore(SCORE_POINTS)
    } /*change this to score points*/    


    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 500)
  })
})

incrementScore = num => {
  score += num
  scoreText.innerText = score
}

startGame()