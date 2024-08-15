const removeFromArray = function(array, ...args) {
    return array.filter(el => !args.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
