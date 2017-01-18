# The end of `for` loop
Explore the async aspect of js

## To run
```npm
# first install
npm install

# specific file
FILE=src/... npm run start
```

## Sources:
- [Egghead video on reduce-data-with-javascript](https://egghead.io/courses/reduce-data-with-javascript)
- [Learn RxJS by Jafar Husain](http://reactivex.io/learnrx/)
- [Microsoft class on async js on edx.org](https://www.edx.org/course/asynchronous-programming-javascript-microsoft-dev234x)⭐very good! ⭐


## Key Functions

### Map
```js
Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray){results.push(projectionFunction(itemInArray))
	});
	return results;
};
```

### Filter
```js
Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
	  if (predicateFunction(itemInArray)) {
		results.push(itemInArray);
	  }
	});
	return results;
};
```

### Reduce
```js
Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}
		return [accumulatedValue];
	}
};
```

### concatAll
```js
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
    subArray.forEach(function(i){
    	results.push(i);
    })
	});

	return results;
};
```

### concatMap
```js
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
		map(function(item) {
      return projectionFunctionThatReturnsArray(item)
		}).
		concatAll();
};
```

### zip
```js
Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter],right[counter]));
	}

	return results;
};
```

## Promise
A promise is a container that holds the eventual result of an asynchronous operation.

Sample:
```js
var promise = new Promise(function(resolve, reject) {

    //do stuff

    var isSuccessful = true;

    if (isSuccessful) { /*if everything is successful*/
        resolve("Success!");
    }
    else {              /*if something went wrong*/
        reject(Error("Failure."));
    }
});
```
The `resolve()` function is used to change the status of the promise from pending to fulfilled. 
The value that is passed inside the resolve() function becomes the fulfillment value of the promise.

The `reject()` function is used to change the status of the promise from pending to rejected. 
The value that is passed inside the reject() function becomes the rejection value of the promise.



Keywords:
- `then( response => {} )`
- `catch( e => dosmthg(e)`

## Request
Keywords
- `const request = new Request('url string', initJSONObject)`

## Fetch
The Fetch API is an interface that is used to make network requests.
The Fetch API is a much needed improvement over XMLHttpRequest, the old API for making network request. The Fetch API is built into most modern browsers and also returns Promises.

Keywords:
- Request
- Response
- `'cors'` vs `'same-origin'`

## Generators
Generators are functions that can be paused and resumed. 
Generators can send out values when pausing and take in values when resuming.
Generators are important because they allow asynchronous functions to written like normal synchronous functions.

Moral of the story: Generators + async = 😜❤️
Generator functions can yield a Promise, process the Promise result asynchronously, and then receive the Promise result back. 
This allows asynchronous code to be written inside generator functions like normal synchronous functions. 

Keywords:
- `function*`
- `yield`
- `yield*`
- `function* foo()`
- `generatorObject.next()`
- `return()`



