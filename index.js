function findMatching(array, string) {
    let newArray = [];
    newArray = array.filter(element => element.toUpperCase() === string.toUpperCase());
    return newArray;
}

function fuzzyMatch(array, string) {
    let newArray = [];
    newArray = array.filter(element => element.slice(0, string.length) === string);
    return newArray;
}

function matchName(array, string) {
    let newArray = [];
    newArray = array.filter(element => element.name === string);
    return newArray;
}