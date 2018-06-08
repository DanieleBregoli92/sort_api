-app.js (webpack file : '/dist/server/bundle.js')
 function list
	1. bubbleSort: function for gettting sorted array from unsorted array using bubbleSort Algorithm
	2. mergeSort: funcitons for getting sorted array from unsorted array using mergeSort Algorithm

 api design
	1. '/bubbleSort'
		receive unsorted numbers array from the client's request and get sorted result using bubbleSort function. After that, respond with result.
	2. '/mergeSort'
		receive unsorted numbers array from the client's request and get sorted result using mergeSort function. After that, respond with result.

-client.js (webpack file : '/dist/client/bundle.js')
 Input numbers to console. 
 post numbers to api.
 And then receive response and display result.


Handle errors
 All errors are handled on client side before requesting.
 
 1. if the length of input array is 0 , exit client.
 2. if string value exists in input array , exit client.

Handle edge cases.

 Handling Space Complexity
Converted element string from array into integer to avoid space complexity.
Checked if input array was already sorted to avoid worst time complexity case.