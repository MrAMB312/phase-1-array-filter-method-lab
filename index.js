function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers, firstLetters) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().startsWith(firstLetters.toLowerCase());
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}