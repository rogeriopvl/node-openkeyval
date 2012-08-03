var OpenKeyVal = require('../lib/openkeyval');

module.exports = {

    testGetKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('diogopms', function(err, res){
            test.ifError(err);
            test.deepEqual(res, 'justtestingthisthing');
            test.done();
        });
    },

    testGetKeyWithSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('diogopms', function(err, res){
            test.ifError(err);
            test.deepEqual(res, 'justtestingthisthing');
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
