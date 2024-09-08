const fs = require("fs");
const text = fs.readFileSync("./text.txt");

console.log(text.toString());
console.log(globalThis);
console.log("End");

const { exec } = require("child_process");

// Command to open Google Chrome on Windows
const command = "start chrome";

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log("Chrome opened successfully");
});

function add (a,b){
	console.log(a+b);
}

add(4,6);
console.lgo("End");


