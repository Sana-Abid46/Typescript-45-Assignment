"use strict";
let Guest_list = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear Mr.' + Guest_list[i] + '\n\nIt is our Pleasure to invite you in our party. \n\nThankYou!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + '\n\nIt is our Pleasure to invite you in our party. \n\nThankYou!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! we find big table so we are inviting 3 more guest.');
Guest_list.unshift('sir Zia Khan');
Guest_list.splice(2, 0, 'Maryam Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + '\n\nIt is our Pleasure to invite you in our party. \n\nThankYou!\n\n');
}
