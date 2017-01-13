import fetch from "node-fetch";
import Request from "node-fetch";

const request = new Request("https://jsonplaceholder.typicode.com/todos/1")

//first fetch request
fetch(request).then(function(result){
    console.log(result.status) //logs 200, OK fetch response
})

//reusing request object
fetch(request).then(function(result){
    console.log(result.status) //logs 200, OK fetch response after reusing request object
})