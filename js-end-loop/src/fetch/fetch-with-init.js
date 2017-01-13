
import fetch from "node-fetch";
import Headers from 'node-fetch'

//this init object specifies the method, headers, mode and body of the request
const initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}"
}

//fetch() method used with an URL endpoint and an init object
fetch("https://jsonplaceholder.typicode.com/posts",initObject)
    .then(function(result){         //result contains a Response object
        return result.json()        //returns a promise containing JSON data extracted from the Response object
    })
    .then(function(result){
        console.log(result);        //logs Object {id: 101}
    })
    .catch(function(err){
        console.log(err);
    });