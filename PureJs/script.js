let a;
let b;

a = 4;
b = '6'
 // switch
switch(a) {
    case 1:
    //execute code
    break;

    case 1:
        //execute code
        break;

        default:
            //execute code
            break
}
let i = 4;
/*for loops
let evenNumbers = [];
for (let i = 2; i < 10; i += 2) {
    evenNumbers.push(i)
}

 while loops
let oddNumbers = [];
while(i < 10){
    oddNumbers.push(i);
    i += 2;
   
}*/


function generateEvenNumbers(start, end){
    let evenNumbers = [];
    for (let i = start; i < end; i += 2) {
        evenNumbers.push(i)
    }
    return evenNumbers;
}
 let evenNumbers = generateEvenNumbers(2, 10);
 console.log(evenNumbers);

 //objects
 /*let human = {
    name: 'phil',
    age: 34,
    height: 1.4,
    gender: 'male',

    talk: function(){
        console.log('i can talk, yes?')
    },
    say: function(whatToSay){
        console.log('i can talk, yes?')
    }
 }
 console.log(human);
 human.age = 22;
 human.weight = 68;
 delete human.gender;
 console.log(human);

 human.talk;
 human.say('hello')

 let student = {
    name: 'precious lekunze',
    age: 12,
    matricule: 'RCT001',
    examMarks:[10, 90, 100, 200],

    average: function() {
        let sum = 0;
        let length = this.examMarks.length;
        for(var i = 0; i < length; isSecureContext++){
            sum = sum + this.examMarks[i];
        }
        return sum/length;
    }
 }

 console.log(student.average()*/

 let participants = [
    
 ]