import { html } from 'lit-html'

export function userRows(usersData) {
    let userRows = usersData.map( (user) => {
      return html`<tr> 
            <td><a href="#" data-id="${user}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>
      `
    })
    
    return userRows
}