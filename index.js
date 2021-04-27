// Your code here
function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
} 
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(expression="*") {
    return function (noun="special") {
        return `You are ${expression}${noun}${expression}!`
    }
}
const Calculator={
   add: function(a,b) {
       return a + b;
   },
   subtract: function (a,b) {
       return a - b
   },
   multiply: function(a,b) {
       return a * b
   },
   divide: function (a,b) {
       return a / b
   }
}
let actionApplyer = function(start, array){
    let  base = start

    for (let i=0; i< ray.length; i++){
        base = ray[i](a)
    }
}