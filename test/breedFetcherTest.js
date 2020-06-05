const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, describe) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, describe);

      done();
    });
  });
  it('should return "breed not found" if beed isnt available', (done) => {
    fetchBreedDescription('breed not found', (err, describe) => {
      assert.equal(describe, null);

      const expected = "breed not found";
      assert.equal(err, expected);
      
      done();
    });
  });
});