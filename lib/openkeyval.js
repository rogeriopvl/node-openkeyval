var http = require('http');

var OpenKeyVal = function(ssl){
    this.ssl = ssl || false;
    this.domain = ssl ? 'secure.openkeyval.org' : 'api.openkeyval.org';
    this.protocol = ssl ? 'https://' : 'http://';
};

/**
 * Get the value of the given key from the online database
 * @param {String} key the key of the value to return
 * @param {Function} callback the callback function
 * @api public
 */
OpenKeyVal.prototype.get = function(key, callback){
    http.get(this.url + '/' + key, function(res){
        var output = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            output += chunk;
        });
        res.on('end', function(){
            callback(null, output);
        });
    }).on('error', function(e){
        console.log('Error: ' + e.message);
        if (callback){
            callback(e.message, null);
        }
    });
    return;
};

/**
 * Set the value of the given key from the online database
 * @param {String} key the key of the value to return
 * @param {String} value the value of the given key
 * @param {Function} callback the callback function
 * @api public
 */
OpenKeyVal.prototype.set = function(key, value, callback){
    var options = {
        host: url,
        port: 80,
        path: '/' + key,
        method: 'POST'
    };

    var req = http.request(options, function(res){
        var output = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            output += chunk;
        });
        res.on('end', function(){
            callback(null, output);
        });
    });
    req.on('error', function(e){
        callback(e, null);
    });
    req.end();
    return;
};

module.exports = OpenKeyVal;
