const userInput = process.argv[2];

const {fetchBreedDescription} = require('./breedFetcher');

fetchBreedDescription(userInput, (err, description) => {
  if (err) {
    console.log('Error details:', err);
  } else {
    console.log(description);
  }
});