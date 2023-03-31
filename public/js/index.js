const formUsers = document.getElementById('formUser')
// SI EXISTE ENTONCES
if (formUsers instanceof HTMLFormElement) {
    formUsers.addEventListener('submit', (e)=> {
        e.preventDefault()
        const formData = new FormData(formUsers)
        console.log(formData);
        const data = {}
        formData.forEach((value, key) => (data[key] = value));
      
        axios.post('/api/createuser', data)
        .then(res => console.log(res))
    })
}