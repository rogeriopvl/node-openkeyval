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

### Set values

    var OpenKeyVal = require('openkeyval');

    var okv = new OpenKeyVal(false); // use true to enable SSL

    okv.set('rogeriopvl', 'rogeriopvl.com', function(err, data){
        if (!err){
            console.log('Saved!');
            console.log(data);
        }
    });

## API Documentation

TODO


[0]: http://openkeyval.org
