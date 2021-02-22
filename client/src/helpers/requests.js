const baseURL = 'http://localhost:8081/users/'

export const getUsers = () => {
   return fetch(baseURL)
   .then(result => result.json())
}

export const postUser = (payload) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
   
}

export const deleteUser = (id) =>{
    return fetch(baseURL + id, {
        method: "DELETE"
    })
}
