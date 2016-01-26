// SECTION A

// WRITE THE FOLLOWING FUNCTIONS RECURSIVELY (!!)
// Try not to look up answers on the internet, but to work together to understand the nature of the problem and potential solutions.

function factorial(n){
    return n === 0 ? 1 : n * factorial(n - 1);
}

function mult(a,b){
    // returns a*b, using only + and - ie without using *
    return a == 1 ? b : b + mult(a - 1, b);
}

function exp(x,n){
    // returns x * x * ... * x [n times], or 'x to the power of n';
    // try not to use * but to use your mult function above;
    return n == 1 ? x : mult(x, exp(x, n - 1));
}

// SECTION B

function odd(n){
    // returns true if n odd, else returns false
    return n == 1 ? true : n > 0 ? odd(n-2) : false;
}

function even(n){
    // returns true if n even, else returns false
    return n === 0 ? true : n > 0 ? even(n-2) : false;
}


function arrTotal(array){
    // returns the sum of all elements in the array.
    // no array methods please.
    // hint: can define helper function within function.
    // if(array.length === 1) return array[0];
    //
    // result = [];
    // result.push(array[0] + array[1]);
    //
    // for(var i = 2; i < array.length; i++){
    //     result.push(array[i]);
    // }
    //
    // return arrTotal(result);
    return array.length == 1 ? array[0] : array[0] + arrTotal(array.slice(1));
}

// SECTION C

// i . Write a function taking a number n, and returns a function which returns a function which returns n.

function first(n) {
    return function() {
        return function() {
            return n;
        };
    };
}

// ii . Complete the following function:

function multiplyBy(k){
    // returns a function taking a number x, which returns k * x
    return function(x) {
        return k * x;
    };
}

// multiplyBy(6)(7) // 42
