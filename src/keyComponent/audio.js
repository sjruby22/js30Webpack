import { html } from 'lit-html'

export function audio(idForClickEvent, audioSrc) {
  return html`
      <audio data-key=${idForClickEvent} src=${audioSrc}></audio>
  `
}