const messageForm = document.querySelector('form');
const messageInput = document.querySelector('#message');
const linkInput = document.querySelector('#link');
const messageDiv = document.querySelector('#message-form');
const linkDiv = document.querySelector('#link-form');
const messageShow = document.querySelector('#message-show');
const decodedMsg = document.querySelector('#decoded-message');

const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
	messageDiv.classList.add('hide');
	messageShow.classList.remove('hide');
	decodedMsg.textContent = `"${message}"`;
}

messageForm.addEventListener('submit', (e) => {
	e.preventDefault();

	messageDiv.classList.add('hide');
	linkDiv.classList.remove('hide');

	const encryptedMessage = btoa(messageInput.value);
	linkInput.value = `${window.location}#${encryptedMessage}`;
	linkInput.select();
});
