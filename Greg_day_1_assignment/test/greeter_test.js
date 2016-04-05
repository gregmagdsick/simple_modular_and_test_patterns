const greeter = require(__dirname + '/../lib/greeter');
const expect = require('chai').expect;

const Greeter = new greeter();

describe('The Greeter Test', () => {
  it('says hello to you', () => {
    expect(Greeter.greet('My New Best Friend')).to.eql('Hello My New Best Friend');
  });
});
