# node-openkeyval

## About

This is a [openkeyval.org][0] api wrapper written in Node and available through an NPM package.

## Install

    npm install openkeyval

## Usage

### Get values

    var OpenKeyVal = require('openkeyval');

    var okv = new OpenKeyVal(false); // use true to enable SSL

    okv.get('rogeriopvl', function(err, data){i
        if (!err){
            console.log(data);
        }
    });

#### Output
    
    rogeriopvl.com

### Set value

    var OpenKeyVal = require('openkeyval');

    var okv = new OpenKeyVal(false); // use true to enable SSL

    okv.set('rogeriopvl', 'rogeriopvl.com', function(err, data){
        if (!err){
            console.log('Saved!');
            console.log(data);
        }
    });

#### Output

    {
        status: 'set',
        key: 'rpvl_test',
        read_only_key: 'rok-e95ae5429a75d8c00f42e551019647b3a2436fd5',
        documentation_url: 'http://openkeyval.org/'
    }

### Set multiple values

    var OpenKeyVal = require('openkeyval');

    var okv = new OpenKeyVal(false); // use true to enable SSL

    var mValues = {
        'rogeriopvl': 'rogeriopvl.com',
        'rpvl': 'blog.rogeriopvl.com'
    }

    okv.multiSet(mValues, function(err, data){
        if (!err){
            console.log('Saved!');
            console.log(data);
        }
    });

#### Output

    {
        status: 'multiset',
        keys: {
            rpvl_test_1: 'rok-0ab0123498ed53016d0c1ae547aa052a5cc72c21',
            rpvl_test_2: 'rok-8618d8060354024fbf8dea07523980740b95e64b'
        },
        documentation_url: 'http://openkeyval.org/'
    }

### Error handling

All error variables in callbacks (`err`) are objects parsed from the `openkeyval.org` API JSON response. So they will have (unless the API suffers some updates) the following format:

    {
        error: 'not_found',
        documentation_url: 'http://openkeyval.org/'
    }

or:

    {
        error: 'invalid_key',
        documentation_url: 'http://openkeyval.org/'
    }

etc ...


[0]: http://openkeyval.org
