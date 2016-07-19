/**
* Watching a directory
* This is pretty advanced, probably won't cover it, but might demo it
*/
var os = require('os'),
    fs = require('fs'),
    out,
    args,
    initialDir = [],
    secondaryDir = [],
    compareObj = {};

/**
* To parse directory structure given a starting point - recursive
*/
function traverseDirectory(startDir, usePath, callback) {
    if (arguments.length === 2 && typeof arguments[1] === 'function') {
        callback = usePath;
        usePath = false;
    }
    //Hold onto the array of items
    var parsedDirectory = [];
    //start reading a list of whats contained
    fs.readdir(startDir, function(err, dirList) {
        if (usePath) {
            startDir = fs.realpathSync(startDir);
        }
        if (err) {
            return callback(err);
        }
        //keep track of how deep we need to go before callback
        var listlength = dirList.length;

        if (!listlength) {
            return callback(null, parsedDirectory);
        }
        //loop through the directory list
        dirList.forEach(function(file) {
            //WIndows is special
            file = startDir + (os.platform() === 'win32' ? '\\' : '/') + file;
            fs.stat(file, function(err, stat) {
                //note the directory or file
                parsedDirectory.push(file);
                //recursive if this is a directory
                if (stat && stat.isDirectory()) {
                    //recurse
                    traverseDirectory(file, function(err, parsed) {
                        // read this directory into our output
                        parsedDirectory = parsedDirectory.concat(parsed);
                        //check to see if we've exhausted our search
                        if (!--listlength) {
                            callback(null, parsedDirectory);
                        }
                    });
                } else {
                    //check if we've exhausted the search
                    if (!--listlength) {
                        callback(null, parsedDirectory);
                    }
                }
            });
        });
    });
}
function checkSame(err, result) {
    if (err) {
        console.log(err);
    }
    if (initialDir.length === 0) {
        initialDir = result;
    } else {
        secondaryDir = result;
        //lets compare these
        if (secondaryDir.length !== initialDir.length) {
            console.log('directory structure changed');
            clearInterval(checkInt);
            
        }

        secondaryDir.sort();
        initialDir.sort();

        for (var i=0, ii = secondaryDir.length; i < ii; i++) {
            if (secondaryDir[i] !== initialDir[i]) {
                if (secondaryDir.indexOf(initialDir[i]) < 0) {
                    console.log(initialDir[i] + ' removed');
                }
                if (initialDir.indexOf(secondaryDir[i]) < 0) {
                    console.log(secondaryDir[i] + ' added');
                }
                //clearInterval(checkInt);
            }
        }
    }
}
var checkInt;
//Normalize the arguments
args = process.argv.splice(2);

if (args.length === 0) {
    console.log("Please provide a directory to watch");
}
//loop through the directories
args.forEach(function(arg) {
    checkInt = setInterval(traverseDirectory, 2e3, arg, true, checkSame);
});

