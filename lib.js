function isPrimitive(test) {
  return test !== Object(test);
}

function replaceObj(obj, replacer) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (Array.isArray(value)) {
      const replaceValues = value.map((x) => replaceObj(x, replacer));
      obj[key] = replaceValues.filter((x) => x !== replacer);
    } else if (typeof value === 'object') {
      replaceObj(value, replacer);
    } else obj[key] = replacer;
  });
  if (isPrimitive(obj)) obj = replacer;
  return obj;
}

module.exports = replaceObj;
