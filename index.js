module.exports = function (oldObject, newProp, newValue, index) {
  const newObject = {};
  const propArray = Object.keys(oldObject);
  for(let i = 0; i < index; i++){
    let stringified = parseInt(propArray[i]).toString();
    let notStringified = Object.keys(oldObject)[i];
    if(stringified === notStringified){
      throw new Error('at least on of the objects keys is an integer index, please refer to the documentation at: https://www.npmjs.com/package/index-prop-injector ')
    }
    newObject[Object.keys(oldObject)[i]] = oldObject[Object.keys(oldObject)[i]];
  }
  newObject[newProp] = newValue;
  for(let i = index; i < Object.keys(oldObject).length; i++){
    let stringified = parseInt(propArray[i]).toString();
    let notStringified = Object.keys(oldObject)[i];
    if(stringified === notStringified){
      throw new Error('at least on of the objects keys is an integer index, please refer to the documentation at: https://www.npmjs.com/package/index-prop-injector ')
    }
    newObject[Object.keys(oldObject)[i]] = oldObject[Object.keys(oldObject)[i]];
  }
  return newObject;
};
