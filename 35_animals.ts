// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ['Dog', 'Cat', 'Parrot'];

for(let name of animals){
    console.log(`A ${name} would make a great pet`);
    
}
console.log("These animals would make a great pet.")

// Result

// A Dog would make a great pet
// A Cat would make a great pet
// A Parrot would make a great pet
// These animals would make a great pet.