const greeter = require(__dirname + '/../lib/greeter');
const expect = require('chai').expect;

describe('The Greeter Test', () => {
  it('says hello to you', () => {
    expect(greeter.greet('My New Best Friend')).to.eql('Hello My New Best Friend');
  });
});
