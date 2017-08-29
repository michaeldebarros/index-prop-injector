
module.exports = function (oldObject, newProp, newValue, index) {
  const newObject = {};
  for(let i = 0; i < index; i++){
    newObject[Object.keys(oldObject)[i]] = oldObject[Object.keys(oldObject)[i]];
  }
  newObject[newProp] = newValue;
  for(let i = index; i < Object.keys(oldObject).length; i++){
    newObject[Object.keys(oldObject)[i]] = oldObject[Object.keys(oldObject)[i]];
  }
  return newObject;
};
