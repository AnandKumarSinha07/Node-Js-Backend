// console.log('server file is runnning')

// // function add(a,b){
// //     return a+b;
// // }

// // var add=(a,b)=>{
// //   return a+b;
// // }
// // var add=(a,b)=>a+b;

// // var result=add(3,1);
// // console.log(result);

// // (function(){
// //     console.log('anand')
// // })();

// // function callback(){
// //     console.log('Inside callback')
// // }
// // var add=function(x,y,callback){
// //     console.log(x*y);
// //     callback();
// // }
// // add(2,3,callback);

// var add=function(x,y,anand){
//     console.log(x*y);
//     anand();
// }
// // add(2,3,function(){
// //     console.log('completed');
// // })

// add(4,3,()=>console.log('ok'));

var fs=require('fs')
var os=require('os')

var user=os.userInfo();
console.log(user);

fs.appendFile('greeting.txt','Hi You are new to backend'+user.username+'!',()=>{
    console.log('file is created');
});

const notes=require('./notes.js');
var a=notes.a;
var result=notes.addNumber(2,3);
console.log(result);
console.log(a);


var _ = require('lodash');

var data=["annad","anand",1,2,1,2,2,1,"name"];
var filter=_.uniq(data);
console.log(filter);