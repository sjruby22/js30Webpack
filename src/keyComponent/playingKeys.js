import { html } from 'lit-html'
import { repeat } from '../../node_modules/lit-html/lib/repeat'
import { key } from './key'
import { audio } from './audio'


export class PlayingKeys {
    constructor(keys) {
        this.keys = keys
    }
    
    renderKeys() { return html`
        ${repeat(this.keys, 
            (k) => k.idForClickEvent, 
            (k) => html`
                    ${key(k.character, k.soundName, k.idForClickEvent)}
                    ${audio(k.idForClickEvent, k.audioSrc)}
                    `
        )}`
    }
    
    get keys() {
        return this.keys
    }
}


        