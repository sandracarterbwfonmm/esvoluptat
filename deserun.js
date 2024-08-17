const person = { name: 'John', age: 30, address: 'Beijing' };
const accessor = function(fn, fields, name) {
  return function(obj) {
    return fields.reduce((acc, field) => {
      acc[field] = fn(obj[field]);
      return acc;
    }, {});
  };
};

const accessorFunc = accessor(
  (value) => value.toUpperCase(),
  ['name', 'address'],
  'toUpperCaseAccessor'
);

const result = accessorFunc(person);
console.log(result); // { name: 'JOHN', address: 'BEIJING' }
