// ===================== String convert to number ================

let value = "12345";
console.log(typeof(value));
let result = Number(value);
console.log(result)
console.log(typeof(result))

// ===================== Number convert to String ====================

let numb = 12345;
console.log(typeof(numb));
let str = String(numb)
console.log(typeof(str));
console.log(str)

// ====================== Boolean to Number & Number to Boolean =================
let bool = true;
console.log(typeof(bool));
let num = Number(bool);
console.log(num);
console.log(typeof(num));

let bol = false;
console.log(typeof(bool));
let con = Number(bol);
console.log(con);
console.log(typeof(con));


let number = 1;
let qaim = Boolean(number);
console.log(typeof(qaim));
console.log(qaim);

let numbe = 0;
let qai = Boolean(numbe);
console.log(typeof(qai));
console.log(qai);

let empty = "";
let qa = Boolean(empty);
console.log(typeof(qa));
console.log(qa);


let stri = "Qaim Hussain";
let q = Boolean(stri);
console.log(typeof(q));
console.log(q);


// ======================= Notes =======================

/*
    number  => "String"
    "string" => number
    boolean => number  true = 1 & false = 0
    number => boolean  1 = true & 0 = false

    note:
    if we give a empty string in boolean the give answer "false";
    if e give not a empty string in boolean the give answer "true";

*/


