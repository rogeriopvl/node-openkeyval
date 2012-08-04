/**
 * OpenKeyVal class
 *
 */

var OpenKeyVal = function(ssl){
    this.ssl = ssl || false;
    this.domain = ssl ? 'secure.openkeyval.org' : 'api.openkeyval.org';
};

/**
 * Get the value of the given key from the online database
 * @param {String} key the key of the value to return
 * @param {Function} callback the callback function, the err param is
 * @api public
 */
OpenKeyVal.prototype.get = function(key, callback){
    var http = this.ssl ? require('https') : require('http');
    var options = {
        host: this.domain,
        port: this.ssl ? 443 : 80,
        path: '/' + key,
        method: 'GET'
    };

    var req = http.request(options, function(res){
        var output = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            output += chunk;
        });
        res.on('end', function(){
            if (res.statusCode !== 200){
                callback(JSON.parse(output));
            }
            else {
                callback(null, output);
            }
        });
    });
    req.on('error', function(e){
        var error = { error: e.message };
        callback(error);
    });
    req.end();
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
    var http = this.ssl ? require('https') : require('http');
    var options = {
        host: this.domain,
        port: this.ssl ? 443 : 80,
        path: '/' + key,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    var req = http.request(options, function(res){
        var output = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            output += chunk;
        });
        res.on('end', function(){
            if (res.statusCode !== 200){
                callback(JSON.parse(output));
            }
            else {
                callback(null, output);
            }
        });
    });
    req.on('error', function(e){
        var error = { error: e.message };
        callback(error);
    });
    req.write('data=' + value);
    req.end();
    return;
};

module.exports = OpenKeyVal;
