import './style.css'
import { key } from './keyComponent/key'
import { audio } from './keyComponent/audio'
// import { playingKeys } from './keyComponent/playingKeys'
import { html, render } from 'lit-html'
import { repeat } from '../node_modules/lit-html/lib/repeat'
import { getKeys } from './api/keys'

const renderKeys = (keys) => html`
        ${repeat(keys, 
            (k) => k.idForClickEvent, 
            (k) => html`
                    ${key(k.character, k.soundName, k.idForClickEvent)}
                    ${audio(k.idForClickEvent, k.audioSrc)}
                    `
        )}`
        
getKeys()
    .then( (keys) => {
        const litHtmlAnchor = document.querySelector('#litHere') 
        render(renderKeys(keys), litHtmlAnchor)
    })
    .then(() => {
        function removeTransition(e) {
        if (e.propertyName !== 'transform') return
        e.target.classList.remove('playing')
        }
        const keys = Array.from(document.querySelectorAll('.key'))
        keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    })
    
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) return
    
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

window.addEventListener('keydown', playSound)
