const iterateFast = (obj) => {
  const stack = [obj];
  while (stack?.length > 0) {
    const currentObj = stack.pop();
    Object.keys(currentObj).forEach(key => {
      console.log(`key: ${key}, value: ${currentObj[key]}`);
      if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
        stack.push(currentObj[key]);
      }
    });
  }
};

const iterateRecursive = (obj) => {
    Object.keys(obj).forEach(key => {

    console.log(`key: ${key}, value: ${obj[key]}`)

    if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
    })
}
