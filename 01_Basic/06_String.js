// Out dated Not recommended
// const greeting = "Hello "
// const name = "someone"
// console.log(greeting + name);


// Recommended
// const greeting = "Hello"
// const name = "Sohaib"
// console.log(`${greeting} my Name is ${name}`);


const name = new String("Muhammad-Sohaib")
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(9));
// console.log(name.indexOf("o"));

// const newName = name.substring(0, 8)
// console.log(newName);

// const anotherName = name.slice(-10, -4)
// console.log(anotherName);

// console.log(name);
// console.log(name.trim());   // trim method remove the empty spaces

console.log(name.replace("Muhammad", "Khan")) // for replacement
console.log(name.includes('Sohaib'))  // for Searching

console.log(name.split("-"))