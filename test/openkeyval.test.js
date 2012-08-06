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
    },

    testMultiSetWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        var multData = {
            'rpvl_test_1': 'testing1',
            'rpvl_test_2': 'testing2'
        };
        okv.multiSet(multData, function(err, res){
            test.ifError(err);
            test.ok(res);
            okv.get('rpvl_test_1', function(err, res){
                test.deepEqual(res, 'testing1');
            });
            okv.get('rpvl_test_2', function(err, res){
                test.deepEqual(res, 'testing2');
                test.done();
            });
        });
    
    },

    testMultiSetWithSSL: function(test){
        var okv = new OpenKeyVal(true);
        var multData = {
            'rpvl_test_1_ssl': 'testing1',
            'rpvl_test_2_ssl': 'testing2'
        };
        okv.multiSet(multData, function(err, res){
            test.ifError(err);
            test.ok(res);
            okv.get('rpvl_test_1_ssl', function(err, res){
                test.deepEqual(res, 'testing1');
            });
            okv.get('rpvl_test_2_ssl', function(err, res){
                test.deepEqual(res, 'testing2');
                test.done();
            });
        });
    }
};
