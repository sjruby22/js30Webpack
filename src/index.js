import './style.css'
import { key } from './keyComponent/key'
import { render } from 'lit-html'
import { getKeys } from './api/keys'

/* eslint-disable no-console */
getKeys()
    .then( (keys) => {
        return keys.map((i) => key(i.character, i.soundName, i.idForClickEvent, i.audioSrc))
    })
    .then(( keysHTML) => {
        console.log(keysHTML)
        const litHtmlAnchor = document.querySelector('#litHere')
        keysHTML.forEach((i) => {
            let divTag = document.createElement("div")
            litHtmlAnchor.appendChild(divTag)
            render(i , divTag)
        })
    })
    
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


// const boomKey = key("G", "boom", "71", "sounds/boom.wav")
// console.log(boomKey)
// const litHtmlAnchor = document.querySelector('#litHtmlAnchor')
// render(boomKey , litHtmlAnchor)
