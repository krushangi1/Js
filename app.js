const a={a:1};
const b={a:1};
// a={b:5};
console.log(a);
console.log(a===b);
console.log(a==b);

const c={a:1};
let d=c;

console.log(c==d);
console.log(c===d);

const target= Math.floor(Math.random() *10 );
console.log(target);
let guess=  Math.floor(Math.random() *10 );

while(guess!==target){
    guess= Math.floor(Math.random() *10 );
    console.log(guess);
}
console.log("WIN!!");
console.log(`TARGET:${target}`);
console.log(`GUESS:${guess}`);

const student = {
        sad:3,
        sd:6,
        ntgr:4,
        jod:9
    }

for(let stu of Object.keys(student)){
    console.log(stu,student[stu]);
}

//FUNCTIONS
function containsColor(arr){
    for(color of arr){
        if(color==='purple')
        {return color;
       
    }return false;
}}


[10,20,30].reduce((sum,curValue)=> { return sum+curValue});










// var greeter = "hey hi";
//     var times = 4;

//     if (times > 3) {
//         let greeter = "say Hello instead"; 
//         console.log(greeter);
//     }

//     console.log(greeter);

//     var greeter="hiiii";

console.log(greeter);
var greeter="hi";