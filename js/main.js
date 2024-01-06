const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = ['Nie', 'TAK!', 'Nie chcesz znać odpowiedzi na to pytanie ...', ' Może...', 'Ciężko powiedzieć...']

const animation = () => {
	img.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania.'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	}
	img.classList.remove('shake-animation')
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answers.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`
}

img.addEventListener('click', animation)
