var http = require('http');

var OpenKeyVal = function(ssl){
    this.ssl = ssl || false;
    this.url = ssl ? 'https://secure.openkeyval.org' : 'http://api.openkeyval.org';
};

OpenKeyVal.prototype.get = function(key, callback){
    http.get(url + '/' + key, function(res){
        if (callback){
            callback(null, JSON.parse(res));
        }
    }).on('error', function(e){
        console.log('Error: ' + e.message);
        if (callback){
            callback(e.message, null);
        }
    });
    return;
};

OpenKeyVal.prototype.set = function(key, value, callback){
    // TODO
};

module.exports = OpenKeyVal;
