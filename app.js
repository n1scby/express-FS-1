const fs = require("fs");


for(i=0; i<10; i++){
fs.appendFile("hello.txt", "Write #: " + i + " Hello Out There!\n", (err)=>{
if(err) {
    console.error("Error!" + err.message);
}else
{
    console.log("No Error!  Good job! Record has been written.");
}

});
};



