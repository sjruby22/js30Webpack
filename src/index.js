import './style.css'
import { PlayingKeys } from './keyComponent/playingKeys'
import { render } from 'lit-html'
import { getKeys } from './api/keys'

getKeys()
    .then( (keys) => {
        const js30Keys = new PlayingKeys(keys)
        console.log(js30Keys)
        const litHtmlAnchor = document.querySelector('#litHere') 
        render(js30Keys.html, litHtmlAnchor)
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
