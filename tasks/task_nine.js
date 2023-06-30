let names = ["Ig", "Eche", "Chizzy", "Debby", "Tina", "Winners", "Ipheco"];
names.forEach(function(names) {
    console.log(names + " is my classmate"); // output: Ig is my classmate, Eche  is my classmate, ...
});

let uppercaseNames = names.map(function(names){
    return names.toUpperCase()
})
console.log(uppercaseNames) // output: the name in uppercase

let nameStartingWithI = names.filter(function(names){
    return names.startsWith("I")
})

console.log(nameStartingWithI) // output: ig and ipheco