const users = [{id: 11, nombre: 'Adam', edad: 23, grupo: 'editor'},
                {id: 47, nombre: 'John', edad: 28, grupo: 'admin'},
                {id: 85, nombre: 'William', edad: 34, grupo: 'editor'},
                {id: 97, nombre: 'Oliver', edad: 28, grupo: 'admin'},];
//1. elemntos con la letra ohn en el nombre
const names = users.filter(user => user.nombre.includes('ohn')).map(user => user.nombre); 
console.log(names);

//2. la suma y el promedio de los valores
const euros = [29.76, 41.85, 46.5];
const sum = (array) => {
    let res = 0;
    array.forEach(element => res += element );
    return res;
}
const suma = sum(euros);
const promedio = sum(euros)/euros.length;

console.log(`suma: ${suma}  promedio: ${promedio}`);


