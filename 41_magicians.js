"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = ["Penn Jillette", "Teller", "Derren Brown"];
function show_magicians(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
