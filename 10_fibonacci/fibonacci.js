const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0){
        return "OOPS"
    } else if (n === 0){
        return 0;
    }
    let prev = 0;
    let curr = 1;
    let temp;
    for (let i = 1; i < n; i++){
        temp = prev;
        prev = curr;
        curr += temp;
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
