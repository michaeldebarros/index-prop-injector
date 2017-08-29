# index-prop-injector
returns a new Javascript object with attached property at specified index

#### **WARNING**

This module takes advantage of the ES6 Object.keys() method traversing the returned array of a given object's own enumerable properties.
The the order of the elements in the returned array by Object.keys() is: **1)** [integer indices](http://2ality.com/2015/10/property-traversal-order-es6.html#integer-indices) sorted numerically in ascending order;  **2)** string keys **in the order in which they were added to 
the object** ; and, **3)**  symbols, also in the order they were added to the object.

Considering that integer indices are numbers that are coerced to strings, the only way to check if a certain key is an integer index or a regular string would be to implement [this](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4).

So, as for now: **ONLY USE ON ES2015 ENVIRONMENT** and **DO NOT USE ON KEYS WITH NUMERICAL REPRESENTATION** !

The same goes to objects with [Symbol] as propoerties, since they do not show on the Objects.keys() returned array. 


Usage:

```javascript
const indexPropInjector = require('index-prop-injector');

const obj1 = {
  prop1: val1,
  prop2: val2,
  prop3: val3,
  prop4: val4,
  prop5: val5
}

const obj2 = indexPropInjector(obj1, "propX", "valueX", 3)
console.log(obj2);

obj2 = {
prop1: val1,
prop2: val2,
prop3: val3,
propX:valueX,
prop4: val4,
prop5: val5
};
 
```
