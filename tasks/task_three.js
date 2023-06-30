let person = {
    name: 'Tom',
    age: 20,
    city: 'New york',
    occupation: 'Web developer'
};

for(let key in person){
    console.log(key + ": " + person[key]) // output: name: Tom, age: 20, ...
};