const fs = require("fs");

const fileName = "data/cars.json";

const cars = [];

fs.readFile(fileName, "utf8", (err, data)=>{
    let cars= JSON.parse(data);
    cars.forEach((item, index, arr)=>{
        console.log("Make: " + item.make + " Model: " + item.model + " Year: " + item.year);

    });
        
});

