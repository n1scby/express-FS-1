const fs = require("fs");
const fileName = "data/test.txt";


fs.mkdir("data", (err)=>{
if(err){
    console.error("Couldn't create the directory - WTF? " + err.message);
}
else {
    console.log("Directory Data created.  Coolio!")
}
});

fs.writeFile(fileName, "Hello Out There!", (err)=>{
    if(err){
        console.error("error! " + err.message);
    }else {
        console.log("all is good. File written.");
    }
});


