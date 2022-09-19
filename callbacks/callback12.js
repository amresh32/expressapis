let fs = require("fs");


fs.readFile('file1.txt',function (ferr, filedata) {

if(ferr) return console.error(ferr);
  console.log(filedata.toString());

});
console.log("the end")




//let filedata = fs.readFileSync('file1.txt');
//console.log(filedata.toString());
//console.log("the end");