var OpenKeyVal = require('../lib/openkeyval');

module.exports = {

    testGetKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.get('diogopms', function(err, res){
            test.ifError(err);
            test.ok(!res.error);
            test.done();
        });
    },

    testGetKeyWithSSL: function(test){
        // TODO
    },

    testSetKeyWithoutSSL: function(test){
        var okv = new OpenKeyVal(false);
        okv.set('rpvl_test', function(err, res){
            test.ifError(err);
            test.ok(res);
            test.done();
        });
    },

    testSetKeyWithSSL: function(test){}
};
