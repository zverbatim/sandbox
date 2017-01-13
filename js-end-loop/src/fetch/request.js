import Request from "node-fetch";

const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"foo":"bar"}'});
console.log(myRequest instanceof Promise )
console.log(myRequest)