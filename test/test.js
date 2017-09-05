const assert = require('chai').assert;
const indexPropInjector = require ('../index');

const oldObj = {
  prop1: "val1",
  "2": "val2",
  prop3: "val3",
  prop4: "val4",
  prop5: "val5"
}

describe('object has integer property: ', function(){
  it('should throw error', function(){
    assert.throws(function(){indexPropInjector(oldObj, "propX", "valueX", 3)});
  });
});
