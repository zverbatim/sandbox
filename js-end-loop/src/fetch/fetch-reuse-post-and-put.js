import fetch from "node-fetch";
import Headers from "node-fetch";
import Request from "node-fetch";

const url = 'http://jsonplaceholder.typicode.com/posts'

var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}"
}
const request = new Request(url, initObject)

fetch("https://jsonplaceholder.typicode.com/posts",initObject)
    .then(function(result){ //result contains a Response object
        return result.json() //returns a promise containing JSON data extracted from the Response object

    })
    .then(function(result){
        console.log(result);
        //logs Object {id: 101}

    })
    .catch(function(err){
        console.log(err);
    });

// //second time using Request object
// fetch(request).then(function(result){
//     return result.json();
// }).catch(function(err){
//     console.log(err.message)
//     // logs "Failed to execute 'fetch' on 'Window': Cannot construct
//     //       a Request with a Request object that has already been used."
// });;