import './style.css'
import { Sounds } from './keyComponent/Sounds'
import { render } from 'lit-html'
import { getJs30Sounds } from './api/sounds'

getJs30Sounds()
    .then( (sounds) => {
        const js30Sounds = new Sounds(sounds)
        const litHtmlAnchor = document.querySelector('#litHere') 
        render(js30Sounds.soundBoard, litHtmlAnchor)
        js30Sounds.animateKeys()
    })