const baseURL = 'http://localhost:3000/users/'

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

// class Request {

// const url =

//   get(url) {
//     return fetch(url)
//     .then((res) => res.json());
//   }

//     delete(url) {
//       return fetch(url, {
//         method: "DELETE",
//       })
//     }

//     post(payload) {
//       return fetch(url, {
//         method: "POST",
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     .then(res => res.json())
//     }



// }

// export default Request;