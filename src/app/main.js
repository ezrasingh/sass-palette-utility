require('./style.sass')

const appRoot = document.querySelector('.app')
const toggleBtn = document.querySelector('#toggle-btn')

function toggleTheme(){
	switch(appRoot.getAttribute('theme')){
		case 'light':
			appRoot.setAttribute('theme', 'dark')
			break
		case 'dark':
			appRoot.setAttribute('theme', 'light')
			break
		default:
			return
	}
}

toggleBtn.addEventListener('click', toggleTheme)
