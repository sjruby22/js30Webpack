import { html } from 'lit-html'

export function key(character, soundName, idForClickEvent) {
  return html`
    <div data-key=${idForClickEvent} class=key>
      <kbd>${character}</kbd>
      <span class=sound>${soundName}</span>
    </div>
  `
}