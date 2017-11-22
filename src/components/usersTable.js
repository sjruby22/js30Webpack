import { html } from 'lit-html'

export function usersTable() {
  return html`
            <table>
            <thead>
                <th>&nbsp;</th>
                <th>userId</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
            </thead>
            <tbody id="users2">
            </tbody>
        </table>
  `
}