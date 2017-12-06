import './style.css'
import { key } from './keyComponent/key'
import { render } from 'lit-html'

/* eslint-disable no-console */
const boomKey = key("G", "boom", "71", "sounds/boom.wav")
console.log(boomKey)
const litHtmlAnchor = document.querySelector('#litHtmlAnchor')
render(boomKey , litHtmlAnchor)

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
