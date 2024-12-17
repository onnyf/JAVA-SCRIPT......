var name ='Olufemi'
var age = 22
var phoneNumber =2347157198212
var accountNumber = undefined
var job = web = 'dev'




var name = 'Olufemi'
var job = 'web dev'
var salary = 28000
var club = 'club234'

var sentence = ' My name is ' + name + ' I am a  ' + job + ' i earn $' + salary + ' at ' + club

console.log(sentence);

let sentence2 = `my name is ${name} i am a ${job} i earn $${salary} at ${club}`

console.log(sentence2);

var sentence3 = `My name is ${name} i am s ${job} i earn $${salary} at ${club}`
console.log(sentence3);




// if(salary<20000){
//     console.log('poor stripper')   
// }else{
// console.log('rich stripper')

// }



salary>20000? console.log('poor stripper') : console.log('rich stripper');


function profit(cp,sp){
      var sum = (28000-20000)
    return console.log('')

}



function areaOfrectangle(l,b){
    var area = l * b
    return console.log(areaOfrectangle)
}
areaOfrectangle(15,8)

function areaOfClinder(r,h){
    var area = 2*(Math.PI)*r*h  
    return console.log(areaOfClinder)
}
areaOfClinder(9,8)


function greetings(){
    return console.log('hello everybody')
}
greetings()


function saybaba(name){
    return console.log('Hello ' + name);

}
saybaba('Buhari')
saybaba('lee')


function king(name,course,job,firm){
    return console.log(' My name is ' + name+ ' i am studying ' + course + '  i want to be a ' + job + ' at ' + firm);

}
king('Gbenga','software eng','web dev','gomycode')


function areaOfSun(r){
  var area =Math.round (4*Math.PI*(r**2))
  return console.log(area)
}
areaOfSun(696340)



var movies = ['Wura' ,'GOT', 'Gladiator', 'Hard', 'king'];
console.log(movies[2])
// add a movie to the 
movies.push('Osofia in london')

console.log(movies);

var removedMovie = movies.pop();
console.log(movies); 

movies.unshift('Titanic');
console.log(movies);

var removedMovie = movies.shift();
console.log(movies)



var employee = {
    fullName: 'Olufemi',  
    email: 'olufemi@example.com', 
    Phone: 234815719821,
    Married: true,
    Age: 23,
    Skills: ['Accountant', 'Web dev', 'Teacher'],
    Address:{
        Street:'Olagbaiye',
        City: 'Ikeja',
        State: 'Lagos',
        country: 'Nigeria',

    },

    Salary: 200000,
    mortgage:function(){
        return this.Salary*(30/100);
    
    },  
     
    tax: function (){
        return this.Salary*12.5/100
    },
     tithe:function(){
      return this.Salary*10/100;

     },

}

console.log(employee.email);
console.log(employee.Address.City);
console.log(employee.Skills);
employee.Skills[0] ='Doctor';
console.log(employee.Skills)

console.log(employee.mortgage());
console.log(employee.tax())
console.log(employee.tithe());




