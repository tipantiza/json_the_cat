const request = require('request');

const fetchBreedDescription = (breedName, callBack) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callBack(err);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callBack(null, data[0].description);
      } else {
        callBack("breed not found", null);
      }
    }
  });
};

module.exports = {fetchBreedDescription: fetchBreedDescription};



// const fetchBreedDescription = (breedName, callBack) => {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (err, response, body) => {
//     if(err !== null){
//       const data = JSON.parse(body)
//     }
//     if(data.length > 0){
//       if(data[0].description){
//         callBack(data[0].description);
//       } else {
//         callBack(`this is a link to find out more about the ${data[0].name}: ${data[0].wikipedia_url}`);
//       }
//     } else {
//       callBack(null, "breed not found");
//     }
//   }
//   })