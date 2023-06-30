function test(mixxedarray) {
    var total = 0;
    for (var i = 0; i <= mixxedarray.length; i++) {
        if (typeof mixxedarray[i] === "number")
            total = total + mixxedarray[i];
    }
    return total;
}

mixxedarray = [2, "11", 3, "a2", false, 5, 7, 1]
console.log("Original array: " + mixxedarray)
console.log("Sum all numbers of the said array: " + test(mixxedarray));
mixxedarray = [2, 3, 0, 5, 7, 8, true, false]
console.log("Original array: " + mixxedarray)
console.log("Sum all numbers of the said array: " + test(mixxedarray));