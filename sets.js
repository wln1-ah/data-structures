const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2);

console.log(set);



const dupeArr = [ 1, 2, 3, 2, 0, 5, 3, 1, 0 ];


const deduper = new Set(dupeArr.slice().reverse());

const deduped = [...deduper];

console.log(deduped);





const fakeDupeObjs = [
    { name: 'pam', age: 42 },
    { name: 'pam', age: 42 },
    { name: 'pam', age: 42 },
    { name: 'pam', age: 42 },
];


const notDeduped = new Set(fakeDupeObjs);

console.log(notDeduped);
