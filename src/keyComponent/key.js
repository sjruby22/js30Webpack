import { html } from 'lit-html'

export function key(character, soundName, idForClickEvent, audioSrc) {
  return html`
    <div data-key=${idForClickEvent} class="key">
      <kbd>${character}</kbd>
      <span class="sound">${soundName}</span>
    </div>
    <audio data-key=${idForClickEvent} src=${audioSrc}></audio>
  `
}