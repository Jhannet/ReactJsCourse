// 1. aniadir al inicio
let people = ["Steve", "Pepe", "Mike", "Nick"];
people = ["Marcos", "Pedro", ...people]
console.log(people);
//2. unir los 2 objetos  en uno
let user = {name: "Steve", age: 22}
let details = {place: "Romania", hobby: "reading"};

const userAndDetails = {...user, ...details}
console.log(userAndDetails);

Object.assign(user, details);
console.log(user);

//3. obtener la variable phone y dir
user = {name: "Pedro", lastname: "poveda", details: {phone: 45536556, dir: "direccion 123"}}
console.log(user.details.phone);
console.log(user.details.dir);


//iventiva2019@gmail.com