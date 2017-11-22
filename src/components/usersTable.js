import { html } from 'lit-html'
import { userRows} from './userRows'

export function usersTable(usersBody) {
  return html`
            <table>
            <thead>
                <th>&nbsp;</th>
                <th>userId</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
            </thead>
            <tbody id="users">
              ${userRows(usersBody)}
            </tbody>
        </table>
  `
}
