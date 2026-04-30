// console.log("this is external js file");
// document.write("sample output display using document object")

num="java :${10+20}"
console.log(num);
num='javascript ${10+20}'
console.log(num);
a=50;
b=50
num=`addition 
of a and b :${a+b}`
console.log(num);

num="java"
num=50;
console.log(num);

num=true
console.log(num);

class sampleExample{
    display(){
        console.log("this is non-static display method in sampleExample class");

    }
    test(){
        console.log("test method");
    }
}

// new sampleExample().display()
// new sampleExample().display()
// new sampleExample().display()

s1=new sampleExample()
s1.display()
s1.test()

function addition(){
    console.log(10+20);
}
addition()

num=330;

res=num%2==0?"even number":"odd number"
console.log(res);

a=10;
b=20;
c=1;
d=true;
console.log(c==d);
console.log(c===d);

console.log(a==b);

a=10;
b="10";
c=null;
d=Symbol("10");
e=15425484986763n;
let f;
console.log("type of variable a is : ",typeof a);
console.log("type of variable b is : ",typeof b);
console.log("type of variable c is : ",typeof c);
console.log("type of variable d is : ",typeof d);
console.log("type of variable e is : ",typeof e);


