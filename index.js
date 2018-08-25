// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromDriverByKey(object, key) {
  newObj = Object.assign({}, object);
  return delete newObj[key];
}

function destructivelyDeleteFromDriverByKey(object, key) {
  return delete object[key];
}
