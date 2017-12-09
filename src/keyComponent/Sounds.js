import { html } from 'lit-html'
import { repeat } from '../../node_modules/lit-html/lib/repeat'
import { key } from './key'
import { audio } from './audio'

export class Sounds {
    constructor(sounds) {
        this.sounds = sounds
    }
    
     renderSoundBoard() { return html`
        ${repeat(this.sounds, 
            (sound) => sound.idForClickEvent, 
            (sound) => html`
                    ${key(sound.clickCharcter, sound.soundName, sound.idForClickEvent)}
                    ${audio(sound.idForClickEvent, sound.audioSrc)}
                    `
        )}`
    } 
    
    renderAudio() { return html`
        ${repeat(this.sounds, 
            (sound) => sound.idForClickEvent, 
            (sound) => html`
                    ${audio(sound.idForClickEvent, sound.audioSrc)}
                    `
        )}`
    }

    renderKeys() { return html`
        ${repeat(this.sounds, 
            (sound) => sound.idForClickEvent, 
            (sound) => html`
                    ${key(sound.clickCharcter, sound.soundName, sound.idForClickEvent)}
                    `
        )}`
    }
    
    playAudio(event) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
        if (!audio) return
        
        audio.currentTime = 0
        audio.play()
    }
    
    pressKey(event) {
        const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
        if (!key) return
    
        key.classList.add('playing')
    }
    
    unPressKey() {
        const unPress = (element) => {
            if (element.propertyName !== 'transform') return
            element.target.classList.remove('playing')
        } 
        
        const keys = Array.from(document.querySelectorAll('.key'))
        keys.forEach(key => key.addEventListener('transitionend', unPress))
    }
    
    get animateKeys() {
        window.addEventListener('keydown', this.pressKey)
        this.unPressKey()
    }
        
    get keys() {
        return this.renderKeys()
    }
    
    get audio() {
        window.addEventListener('keydown', this.playAudio)
        return this.renderAudio()
    }
    
    get soundBoard() {
        window.addEventListener('keydown', this.playAudio)
        return this.renderSoundBoard()
    }
}


        