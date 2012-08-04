var OpenKeyVal = require('../lib/openkeyval');

module.exports = {

    /**
     * Test get of an existing key
     */
    testGetExistingKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('rogeriopvl', function(err, res){
            test.ifError(err);
            test.deepEqual(res, 'rogeriopvl.com');
            test.done();
        });
    },

    /**
     * Test with key that does not exist (I hope so... :P)
     */
    testGetInexistentKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('rogeriopvl_asdjkasdja', function(err, res){
            test.ok(err);
            test.ok(err.error);
            test.done();
        });
    },

    /**
     * Test with invalid key (key with 3 chars is considered invalid by openkeyval
     */
    testGetInvalidKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('lol', function(err, res){
            test.ok(err);
            test.ok(err.error);
            test.done();
        });
    },

    testGetKeyWithSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('rogeriopvl', function(err, res){
            test.ifError(err);
            test.deepEqual(res, 'rogeriopvl.com');
            test.done();
        });
    },

    testSetKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.set('rpvl_test', 'testing...', function(err, res){
            test.ifError(err);
            test.ok(res);
            okv.get('rpvl_test', function(err, res){
                test.deepEqual(res, 'testing...');
                test.done();
            });
        });
    },

    testSetKeyWithSSL: function(test){
        var okv = new OpenKeyVal(true);
        okv.set('rpvl_test', 'testing...', function(err, res){
            test.ifError(err);
            test.ok(res);
            okv.get('rpvl_test', function(err, res){
                test.deepEqual(res, 'testing...');
                test.done();
            });
        });
    }
};
