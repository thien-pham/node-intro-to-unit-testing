const should = require('chai').should();
//check name
const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function () {
    it('should return fizz-buzz if divisible by 15', function () {
        fizzBuzzer(15).should.equal('fizz-buzz');
    });

    it('should return buzz if divisible by 5', function () {
        fizzBuzzer(5).should.equal('buzz');
    });

    it('should return fizz if divisible by 3', function () {
        fizzBuzzer(3).should.equal('fizz');
    });

    it('should raise error if args not numbers', function () {
        const badInput = 'a';
        fizzBuzzer(badInput).should.throw(Error);
    });
});
