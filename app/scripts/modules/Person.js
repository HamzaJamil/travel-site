import $ from 'jquery'
console.log('this is the person module')

class Person {
    constructor(name, Color) {
        this.name = name
        this.favColor = Color
        this.greet()
    }
    greet() {
        console.log('hi there !')
    }
    meet() {
        console.log('Hello! mera name is ' + this.name + ' and my favorite color is ' + this.favColor + '.')
    }
}
$('h1').on('click touch', function () {
    $('h1').remove()
    console.log('Hi mai Mar gai :D')
})



export default Person