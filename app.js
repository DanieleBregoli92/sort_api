const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =process.env.PORT||3000;
app.use(bodyParser.json());
app.listen (port);
module.exports = app;


var bubbleSort = function (a)
{
    
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

var merge = function (array, p, q, r) {
    var a = [],
        b = [],
        c = p,
        d, e;
    for (d = 0; c <= q; d++, c++) {
        a[d] = array[c];
    }
    for (e = 0; c <= r; e++, c++) {
        b[e] = array[c];
    }
    c = p;
    for (e = d = 0; d < a.length && e < b.length;) {
        if (a[d] < b[e]) {
            array[c] = a[d];
            d++;
        } else {
            array[c] = b[e];
            e++;
        }
        c++;
    }
    for (; d < a.length;) {
        array[c] = a[d];
        d++;
        c++;
    }
    for (; e < b.length;) {
        array[c] = b[e];
        e++;
        c++;
    }
};

var mergeSort = function(array, from, to) {
    if(to > from) {
        var middle = Math.floor( (from+to)/2 );
        mergeSort(array, from, middle);
        mergeSort(array, middle+1, to);
        merge(array, from, middle, to);
    }
};

app.post('/bubbleSort',(req,res)=>{
        var arr = req.query.unsortedNumbers;
        var array = JSON.parse("[" + arr + "]");

        bubbleSort(array);

        res.send(array.toString());
    }
);

app.post('/mergeSort',(req,res)=>{
        var arr = req.query.unsortedNumbers;
        var array = JSON.parse("[" + arr + "]");

        mergeSort(array, 0 , array.length-1);
        console.log(array);
        res.send(array.toString());
    }
);
