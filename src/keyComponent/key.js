import { html } from 'lit-html'

export function key(clickCharcter, soundName, idForClickEvent) {
  return html`
    <div data-key=${idForClickEvent} class=key>
      <kbd>${clickCharcter}</kbd>
      <span class=sound>${soundName}</span>
    </div>
  `
}