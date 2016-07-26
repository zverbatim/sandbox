var assert = require('chai').assert;

describe('Dummy', function(){
    before(function(){
        console.log('before the block');
    });

    beforeEach(function(){
        console.log('before each test in the block');
    });

    after(function(){
        console.log('after the block');
    });

    afterEach(function(){
        console.log('after each test in the block')
    });


    it('this should fail', function(){
        assert.equal(0, 1);
    })

    it('do a dummy test', function(){
        assert.equal(1, 1);
    });
});


