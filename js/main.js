// var Question = function(answers)

function answer() {
	var words = document.getElementById('words');
	var randomAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'Most likely', 'No, of course not', 'Sources say no', 'Not on my watch']
	var randomAnswer = randomAnswers[Math.floor(Math.random() * randomAnswers.length)]
	words.innerHTML = randomAnswer;
	}


// Question(randomAnswer) {

// }

