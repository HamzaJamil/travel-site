import Person from './modules/Person'

console.log('this is index.js module')

var John = new Person('John', 'Green')
console.log(John)
John.meet()