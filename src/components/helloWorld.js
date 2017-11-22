import { html } from 'lit-html'

export function helloWorld(prefix, name) {
  return html`
    <h1>Well, hello there ${prefix} ${name}...from lit-HTML templates</h1>
  `
}