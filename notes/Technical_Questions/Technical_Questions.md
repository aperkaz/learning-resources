# Technical Questions
Technical questions, centered on the frontend stack.

Prepare for them, as the knowledge you get is useful in day to day too.

## JS inteview questions

### When would you use a closure?

A closure encapsulates a section of code, accessible only by the returned function.

```javascript

function createSecretMessage(message){

    return function(){
        console.log(`Hi ${message}`)
    }
}

const secretMessageToSara = createSecretMessage('Sara');

secretMessageToSara();
```

I would use a closure when I want to encapsulate a value inside a function scope and use it somewhere else. Encapsulate / private fields.

It is also used for:
- Currying: a pattern that takes function that more than one parametes, and breaks it down into multiple functions with one parameter. Good for composition.

```javascript
function curriedSum(a){
    return function(b){
        return a + b;
    }
}

const plusFive = curriedSum(5);
console.log(plusFive(10)); // 15
console.log(curriedSum(5)(10)); // 15
```

- Partial application: a function that accepts a function with N parameters, and return a function with less than N parameters.

```javascript
const partialApply = (targetFunction, ...fixedArgs) => {
const partialApply = (targetFunction, ...fixedArgs) => {
	return (...remainingArgs) => (
		targetFunction.apply(this, fixedArgs.concat(remainingArgs))
	); 
}; 

const add = (a, b) => a + b;

const add10 = partialApply(add, 10);

console.log(add10(5)); // 15
```

### What are the advantages of using Promises instead of Callbacks?

Promises are a newer spec of the JS language. They provide a cleaner mechanism to handle async operations such as network requests, or I/O.
They have APIs for chaining async ops `Promise.then` and handle concurrent promises with `Promise.all([arrayWithPromises]).then`.

```javascript
const asyncOperation = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('Happy');
    }, 500);
});

asyncOperation
.then(function(value){
     console.log(`Promise completed with: ${value}`)
}
)
.catch(e => console.error(e));
```

You can aboid Callback Hell, wich can happen when using callbacks. 

```javascript
function someAsyncMessage(message, callback){
    setTimeout(function(){
        console.log(`Async message: ${message}`);
        callback();
    }, 500);
};

function alertComplete(){
    console.log('Async completed!');
}

someAsyncMessage('Hi Sara', alertComplete);
```

### What is the difference between window `load` and `DOMContentLoaded`

`DOMContentLoaded` is fired when the initial HTML of a page is parsed and rendered, without waiting for the dependent resources (styles, fonts...) to load.

`load` is fired when the whole document and dependent resources are loaded.

```javascript
window.addEventListener('load', (event) => {
  console.log('DOM and dependent resources loaded'); // executed second
})
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed (not dependent resources)'); // executed first
});
```

### What is variable `hoisting`?

`Hoisting` is a JS behaviour that happens at interpretation (run time). Some browsers have JIT compilers that translate JS to bytecode.

The declaration of variables (not assignment) declared with `var` are brought up to the scope. Global or function scope. `let` and `const` have block scope, hoisted only to block level, not global / function.


```javascript
console.log(a); // undefined
console.log(b); // undefined
var a = 10;
const b = 5;

console.log(c); // error
console.log(d); // Reference error, d is not defined
if(true){ // block scope
  var c = 1;
  const d = 10;
}

console.log(e); // Reference error, e is not defined
console.log(f); // Reference error, f is not defined
function test(){
    var e = 1;
    const f = 10;
}

```

### Synchronous vs Async functions?

Sync functions execute the code secuentialy (blocking) when they are called, and return the result right away.

Async function execute async ops (i/o, http calls), (non-blocking) and the result is return later. The control flow is returned before the result is computed.
A handles is used to operte in those results, callbacks, .then in promises, or async await in new es7...

### What is the difference between document load event and document DOMContentLoaded event?

DOMContentLoaded is triggered once the HTML is loaded and parsed, and document.load when the html and other resources stylesheets, fonts, images... are ready.

### What is the difference between feature detection, feature inference and UA string?

Feature detection, run different code based on the available features of the client.

Feature inference, check the support of a feature before runing code depending on it.

UA string, information of the browser, systems... serves as identifier.

### When would you use anomimous functions?

When assignming a function to a function prop.

To encapsulate some context within local scope.

A callback.

As argument for functional programming constructs.

### What is AJAX?

Technology that allows for pages to communicate with a server without modifying the content of a page. Asyncronous Javascript And XML.

### Explain why the following doesn't work as an Immediately Invoked Function Expression (IIFE): function foo(){ }();.

IIFE must be wrapped by brackets. 

`function foo(){}` is readed first, and then `();` as a call to a function without a name.

### What are the disadvantages of writing code in a language that transpiles to JS (es6, typescript, coffescript)

Requires process to compile and transpile that code to the target language.

It can make debugging more difficult, if the transpiled code doesnt map correctly to the source code. 

Maybe less support for a language transpilation. Depends on community.

### Call vs Apply

```javascript
function test(a, b, c){
    console.log(a+b+c)
    console.log(this.d)
}

test.call({d: "call"},1,2,3); // call; 6
test.apply({d: "apply"}, [3,2,3]) // apply; 8
```

### What are the advantages of inmutability?

Inmutable data provides:

- Less memory use, copy objects by reference.
- Thread safety.
- Isolate side effects.
- Enable functional programming. same input, same output.

### Destructuring and object or an array

```javascript
const arr = [1,2,3];
const [a, ...b] = arr;
```

### What is the difference between null, undefined and undeclared?

null: a value
undefined: declared but not assigned
undeclared: non declared

### What is a curry function?

A curry function is a function that takes one argument and return a function. Functional paradigm for composition.

```javascript

const curriedAdd => a => b => {
    return a + b;
}

curriedAdd(2)(2); // 4

function cAdd(a){
    return function(b){
        return a + b;
    }
}

cAdd(2)(3); // 5
```

### What are the advantages of using spread syntax?

`...` es6 syntax. Usefull in functional paradigm. Deconstruct objects, catch unlimited argumnets, copy arrays...

### What is a closure?

A closure is a function that returns a function that has access to the scope of the first function. This is used for encapsulating data inside the first function, that the returned function has access to.

```javascript
function secretMessage(message){

    return function print(){
        console.log(message)
    }
}

const messageToLara = secretMessage('Hi Lara');
messageToLara.print(); // Hi Lara
```

### Why extending built-in js objects is a bad idea?

By extending JS objects, the prototype chain is broken. The extended methods may work for some objects, but they wont be present on the other objects from that prototype chain. 

Overwrites may colide too.

### When would you create static class members?

Static class members are shared between the different instances of class. Usefull for utility methods or variables that should not change/ stateless.

### What is the event loop?

The event loop is a single threaded loop that checks if there is work to do left in the task queue.

### What is the difference between `.call` and `.apply`?

They both get context passed as the first argument. `.call` then passes individually the rest of the arguments to the function, while `.apply` passes an array as second argument, containing all the parameters.

### [...] is a technique of handling events at a higher level in the DOM than where the event originated.

Event delegation is the technique, which uses `event bubbling`.
Add listeners to a parent element that will be triggered by a children's event.

### When would you use `document.load` event?

Fired when all the HTML,CSS and dependent resources are ready. I would use it to delay the program execution (ex. trigger JS animations), or other processes that need to assure that all the required assets are fetched and loaded.

### What is the difference between mutable an inmutable objects?

Mutable objects can be modified after declaration, and can not be passed by reference, as the original object may be modified somewhere else.
Inmutable objects can be copied by reference, while modifiyng requires to copy the whole object.

### What are the disadvantages of using Promises against callbacks?

Promises are a newer feature of the language, they may need pollyfil for some browsers.

Callbacks can attach anonimous functions.

### What is the difference between host objects and native objects?

Host objects are provided by the runtime environment (window, document)...

Native objects are objects part of the ECMAScript specification (String, Fucntion...)

### When would you use a closure?

A closure is a fucntion that returns a function that has access to the scope of the enclosing function. 

Usefull for hiding data, currying (execute operations with function composition).

### How can you share code between files?

In browser
RequireJS and the `window` object.
In node
You can use module.exports = {}, require {} from ''; 

Both
Of es6 import syntac, export const a; import {a} from '';

### How does the `this` keyboard work in JS?

This keyboard refers to the context. The context is the surrounding object when a fucntion is called.

```javascript
Function.prototype.call(context, arg1, arg2, ...)
Function.prototype.apply(context,[arg1, arg2, ...])
Function.prototype.bind(constext)// create new function to be called in context
```

### What is a HOC?

A High-Order-Function is a function that takes a function as an argument or returns a function. Usefull for adding functionality to existing functions.

```javascript
const logggingHOC => (afunction) => (args) => {
    console.log(`calling with args:`, args);
    return afunction.apply(this,args);
}
```.