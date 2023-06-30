function findLeapYears(startYear, endYear) {
    const leapYears = [];

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

// Example usage
const startYear = 2000;
const endYear = 2023;

const leapYears = findLeapYears(startYear, endYear);
console.log("Leap years between", startYear, "and", endYear, "are:", leapYears);