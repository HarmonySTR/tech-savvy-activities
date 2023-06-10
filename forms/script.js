const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (name.value == '' || name.value == null) {
        alert.messages('Name is required')
    }

    if(password.value.length > 30  && password.value.length < 6 ){
        alert.messages('Password must be at least 6 characters long and 30 characters short')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})