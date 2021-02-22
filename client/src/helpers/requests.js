class Request {

    delete(url) {
      return fetch(url, {
        method: "DELETE",
      })
    }

}

export default Request;