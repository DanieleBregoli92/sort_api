const readcommand = require('readcommand');
const http = require('http');

var options = {
    host: 'localhost',
    port: 3000,
    path: '/resource?id=foo&bar=baz',
    method: 'POST'
};

readcommand.read(function(err, args) {
        var flg = false;
        if (args.length != 0) {
            
            for (var i = 0 ; i < args.length ; i ++) {
                if (isNaN(args[i])) {
                    break;
                }
            }

            if (i == args.length) {
                
                options.path = '/mergeSort?unsortedNumbers=' + args.toString();
                http.request(options, function(res) {
                    res.setEncoding('utf8');
                    res.on('data', function (sorted_array) {
                        console.log('merge_sorted_array : ' + sorted_array);
                    });
                }).end();

                options.path = '/bubbleSort?unsortedNumbers=' + args.toString();
                http.request(options, function(res) {
                    res.setEncoding('utf8');
                    res.on('data', function (sorted_array) {
                        console.log('bubble_sorted_array : ' + sorted_array);
                    });
                }).end();  
            }
        }
    }
);