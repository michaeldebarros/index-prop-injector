# index-prop-injector
Returns a new Javascript object with attached property at specified index.

### **index-prop-injector(oldObject, newProperty, newValue, index)**

#### **WARNING**

This module takes advantage of the ES6 Object.keys() method traversing the returned array of a given object's own enumerable properties.
The order of the elements in the returned array by Object.keys() is: **1)** [integer indices](http://2ality.com/2015/10/property-traversal-order-es6.html#integer-indices) sorted numerically in *ascending order* ; and,  **2)** string keys **in the order in which they were added to 
the object** .

This module was written to only work with regular **string keys** , considering they maintain the order in which they were added to the object. 

Taking into account that integer indices are numbers that, in the end, are coerced to strings, this module applies a diffing algorithm based on the ECMA spec for  *[array index](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4)* to sort between integer indices and regular strings.  

The presence of one or more integer indicies **throws an error** .

#### [Symbol]

This module does not apply to objects with [Symbol] as keys, since they do not show on the Objects.keys() returned array.

In summery: **ONLY USE ON ES2015 ENVIRONMENT** and **DO NOT USE ON OBJECTS WITH [SYMBOL] AS KEYS** !



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
