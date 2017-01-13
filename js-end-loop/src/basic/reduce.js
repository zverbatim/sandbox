const reduceTest = function () {
    var videos = [
        {
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "id": 675465,
            "title": "Fracture"
        },
        {
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];

    // Expecting this output...
    // [
    //	 {
    //		 "65432445": "The Chamber",
    //		 "675465": "Fracture",
    //		 "70111470": "Die Hard",
    //		 "654356453": "Bad Boys"
    //	 }
    // ]
    return videos
            .reduce(function (accumulatedMap, video) {
                const obj = {};
                obj.id = video.id;
                obj.title = video.title;
                return [ ...accumulatedMap, obj];
            }, {});
}


console.log(reduceTest())
