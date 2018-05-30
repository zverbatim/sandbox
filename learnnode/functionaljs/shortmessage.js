function getShortMessages( obj ){
    return obj.filter( function (m) {
        return m.message.length < 50;
    }).map( function (m) {
        return m.message;
    });
}

module.exports = getShortMessages;
