//CommonJS - every file is a module (by default)
// node uses commonJs under the hood
//MODULES - means split your code into multiple modules, but only run one file
//Module - Encapsulated Code (only share minimum)

const secret = 'SUPER SECRET'

const sayHi = (name) => {

    console.log(`Hello there ${name}`);
}

sayHi('Apeng');