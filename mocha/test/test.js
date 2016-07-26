var assert = require('chai').assert;

beforeEach(function() {
    console.log("\nExecuting something before each test ...\n")
});

describe('Array', function(){
    describe('#indexOF()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})

describe('Generic assert', function(){
    it('zero = zero', function(){
        assert.equal(0,0);
    })
})
