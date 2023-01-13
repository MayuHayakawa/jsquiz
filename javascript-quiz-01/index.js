// ------------------------------------------------
let x = "Pooh";
let y = "Tigger";
let z = y; //z = "Tigger"
y = x; //y = "Pooh"
x = z;

console.log(x); //Tigger
// ------------------------------------------------

// ------------------------------------------------
// Use indexOf twice.
function secondIndexOf(s1, s2) {
    let first = s1.indexOf(s2);
    let second = s1.indexOf(s2, first + 1);
    return second;
}

console.log(secondIndexOf("xyz, abc, def, abc", "abc"));
// ------------------------------------------------

// ------------------------------------------------
// Initialize a variable with 'UNEQUAL'.
// Use 'if' to set the variable to 'EQUAL' if necessary.
// Return the variable.
function equals(a, b) {
    let check = 'UNEQUAL';
    if(a === b) {
        check = 'EQUAL';
    }
    return check;
}
console.log(equals(1,1));
// ------------------------------------------------

// ------------------------------------------------
function checkOld(age) {
    if(age > 18) {
        console.log("Old enough");
    } else {
        console.log("Too young")
    }
}
checkOld(10);
// ------------------------------------------------

// ------------------------------------------------
// Calculate the ones digit of n with modulo 10.
// Calculate the tens digit of n by dividing by 10 and rounding down.
// Compare ones and tens digits.
function repdigit(n) {
    let big = Math.trunc(n/10);
    let small = n % 10;
    if(big === small) {
        return 'Rapdigit!';
    } else {
        return 'No Rapdigit!'
    }
}
console.log(repdigit(33));
// ------------------------------------------------

// ------------------------------------------------
function unequal(a, b, c) {
    return a !== b && b !==c && c!==a
}
console.log(unequal(1,2,1));
// ------------------------------------------------

// ------------------------------------------------
function a() {
    if (-1 || 0) {
        console.log( 'first' );
    }
    if (-1 && 0) {
        console.log( 'second' );
    }
    if (null || -1 && 1) {
        console.log( 'third' );
    }
}
a();
// ------------------------------------------------


