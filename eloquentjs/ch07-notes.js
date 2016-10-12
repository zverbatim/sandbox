var day = {
    name: "Friday",
    _abbreviation: "",
    get abbreviation() {
        if (this.name == "Monday") return "M";
        else return "undefined";
    }
};
console.log(day.abbreviation);