const palindromes = function (string) {
    return string.replace(/[^\w]/g, '').toLowerCase() === string.split("").reverse().join("").replace(/[^\w]/g, '').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
