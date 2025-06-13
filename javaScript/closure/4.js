function add(...args) {
  console.log(args);
  return (...newArgs) => {
    const arr = [...args, ...newArgs];
    console.log(arr);
    return arr;
  };
}
console.log(add(1, 2, 3)(4, 5, 6));
