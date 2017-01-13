'use strict'

Object.assign(Array.prototype, {
    concatAll() {
        let results = [];

        this.forEach(subArr => {
            subArr.forEach(item => {
                results.push(item);
            });
        });

        return results;
    }
});

var movieLists = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
                    {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"}
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"},
                    {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"}

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{id: 432534, time: 65876586}]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"},
                    {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"}
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    {width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"},
                    {width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"},
                    {width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"}
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{id: 432534, time: 65876586}]
            }
        ]
    }
];

const test = () => {
    return movieLists
        .map((video) =>
            video.videos.map(v => {
                return v.boxarts.filter(b => b.width == 150)
                    .map(b => ({
                        id: v.id,
                        title: v.title,
                        boxart: b.url
                    }))
            }).concatAll()
        ).concatAll()
}


Object.assign(Array.prototype, {
    mapConcat(projectionFunction) {
        return this.map((it) => projectionFunction(it))
            .concatAll()
    }
});

// Use one or more map, concatAll, and filter calls to create an array with the following items
// [
//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];

const result = movieLists.map(v => v.videos.map(v => v.id)).concatAll()
const result2 = movieLists.mapConcat(v => v.videos.map(v => v.id))
console.log(result)
console.log(result2)


const result3 = movieLists
    .mapConcat((video) =>
        video.videos.mapConcat(v => {
            return v.boxarts.filter(b => b.width == 150)
                .map(b => ({
                    id: v.id,
                    title: v.title,
                    boxart: b.url
                }))
        })
    )
console.log("result3 = ", result3)