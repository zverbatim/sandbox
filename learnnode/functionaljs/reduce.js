
function countWords( arr ){
    return arr.reduce( function (a, b){
        a[b] = ++a[b] || 1

        return a
    }, {})  
}

module.exports = countWords
