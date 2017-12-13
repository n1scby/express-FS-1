const fs = require("fs");
const fileName = "data/cars.json";

let Car = function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

fs.mkdir("data", (err) => {
    if (err) {
        if (err.code != "EEXIST") {
            console.error("Error.  Directory Not Created. " + err.message);

        } else {
            console.log("Directory exists.  Not created.");
        }
    } else {
        console.log("Directory Created! Have a happy day!");
    }
});

let cars = [];
for(var i=1995; i<2017; i=i+5){
    let newCar = new Car("Honda", "civic", i);
    cars.push(newCar);
}

let carJson = JSON.stringify(cars);

fs.writeFile(fileName, carJson, (err) =>{
    if(err) {
        console.error("Rut Row.  File did not write. " + err.message);
    } else
    {
        console.log("File has been written.  Sweet!");
    }
});


