import './index.css'
import numeral from 'numeral'
import {getUsers} from './api/userApi'

const testValue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${testValue} for this course...NOT `)// eslint-disable-line no-console

getUsers().then(result => {
    let usersBody = ""
    
    result.forEach(user => {
    usersBody+= `<tr> 
        <td><a href="#" data-id="${user.id}" class="DeleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.userName}</td>
    </tr>`
    })
    
    global.document.getElementById('users').innerHTML = usersBody
})