import fetch from "node-fetch";
const url = 'https://jsonplaceholder.typicode.com/posts/2'

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        const post = `${result.title}\n=========\n${result.body}\nby ${result.userId}\n`
        console.log(post)
    })
    .catch((e) => {
        console.log("Error: ", e)
    })
