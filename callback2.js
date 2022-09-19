
console.log("user1 made a request.");
  setTimeout(callback,5000);

console.log("user2 made a request");
setTimeout(callback,5000);

console.log("user3 made a request");
setTimeout(callback,5000);

 function callback() 
    {  
    console.log("queried the data and delivered in 5 seconds.")
    }
