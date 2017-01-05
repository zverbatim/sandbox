'use strict'

let foo = ({
    optionalParam = "get",
    url = required("url")
}) => {
    console.log("optionalParam = ", optionalParam, ", url (* it it is required) = ", url)
    console.log("foo is working")
}

const required = (name) => {
    throw new Error("Missing param "+ name)
}

try {
    foo({undefined, url: "google.com"})
} catch (e) {
    console.log("Error: ", e)
}


try {
    foo({undefined})
} catch (e) {
    console.log("Error: ", e)
}
