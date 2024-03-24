// write a program that creats objects containing these items.

// Datatype of person object
interface person {
    age : number
    name : string
    Nationality : string
    student : boolean 
} 

// person object 
let person = {

    age : 18 ,
    name : 'Sana' ,
    Nationality : 'pakistani' ,
    student : true ,
}

// print person
console.log(person)

// Datatype of car object
interface car {

    maker : string
    color : string
    automatic : boolean
}

// car object
let car = {

    makers : 'toyota' , 
    color : 'black' ,
    automatic : true
}

// print car
console.log(car)
