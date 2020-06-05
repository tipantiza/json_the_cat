const request = require('request');
const userInput = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (err, response, body) => {
  // console.log(body);
  if(err){
    console.log(err, "could not connect to server");
  } else{
    const data = JSON.parse(body) 
    if(data.length > 0){
      if(data[0].description){
        console.log(data[0].description);
      } else {
        console.log(`this is a link to find out more about the ${data[0].name}: ${data[0].wikipedia_url}`);
      }
    } else {
      console.log("breed not found");
    }
  } 
})