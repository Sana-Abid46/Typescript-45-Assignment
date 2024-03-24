// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any; // optional additional properties
}

function carInfo(manufacturer: string, model: string, ...args: [string, any][]): CarInfo {
    const car: CarInfo = { manufacturer, model };

    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}


const carInfo1 = carInfo('Toyota', 'Corolla', ['color', 'Red'], ['year', 2022]);
const carInfo2 = carInfo('Honda', 'Civic', ['color', 'Blue'], ['year', 2023], ['features', 'Sunroof']);

console.log(carInfo1);
console.log(carInfo2);
