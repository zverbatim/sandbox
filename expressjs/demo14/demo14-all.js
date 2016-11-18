var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getFile(url, callback) {
    console.log('getFile', url, '...')
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function getUsefulContents(url, callback) {
    console.log('getUsefulContents ....');
    getFile(url, data => callback(JSON.parse(data)));
}

console.log('Accessing the data ...');
getUsefulContents("dummy.json", data => {
    console.log('here is the data:')
    console.log(data);
});