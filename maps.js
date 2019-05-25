
const map = new Map();

map.set('key', 'value');
// map.key = 'value';
// console.log(map.key);

map.get('key');

const objKey = {
    some: 'sort',
    of: 'object',
};

map.set(objKey, { metadata: 'about object' });

const spreadMap = [ ...map ];

console.log(spreadMap); // "tuple"

const [ key, value ] = spreadMap[0];




const weakMap = new WeakMap();
