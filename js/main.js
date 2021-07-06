/*
This is how we write a comment in javascript!
This is a multi line comment does not neccessary has to follow
javascript synatx!
*/

//single line comment goes Here
var welcome_message="This is a welcome message stored inside a variable";//string value
var welcome=",go ahead and click ok";

var myAge=22;//integer value, no "" needed
var exactAge=22.80;//float value


alert(welcome_message + welcome);
//gives the alert with the value stored in welcome_message variable
//concatenated with the value in welcome variable, because they are strings!

console.log("My_age is "+ myAge);//writes into the console with myAge & exact age value
console.log("My exact age is "+exactAge);
console.log("Hey "+welcome_message+" "+welcome);

myAge++;//similarly variable-- can also be used to reduce one times
console.log("My age one year later will be: "+myAge);

// one way to write age afetr 8 years :myAge=30;
myAge=myAge+8;//another way to write the same thing
console.log("My age after 8 years will be: " + myAge );//find the value of myAge chnaged in your console

var myname;//since no value stored it will display undefined on the console
console.log("My friends call me: ",myname);

var name="Suyash";//since value is stored to the variable it will be retrieved whenever called by console
console.log("One of my friends going with me is: ",name);

var iLikeCheese=true;
/*
iLikeCheese==true;//will retuen true

iLikeCheese=="true";//will return false
//we can resign the variable "iLikeCheese" to false, by writing the following statement
//iLikeCheese=false;
//error--> "hih"=3
//error--> 5=6
*/
var mynum=6;
mynum

var ispremiumuser=true;//use of if & else statement
if(ispremiumuser == true)
{
  console.log("Thanks for being a loyal customer");
}
else {
  console.log("Hope you would like to become our customer");
}
if(ispremiumuser)//to check if this variable exists or not,no condition required
{
  console.log("yes ispremiumuser exists!");
}

//use of if->else-if->else statements
var age=28;
if(age<1)
{
  console.log("You are a baby");
}
else if(age<3)
{
  console.log("You are a toddler");

}
else if(age <20)
{
  console.log("You are a teenager");
}
else if(age<40)
{
  console.log("You are an adult");
}
else {
  console.log("You must be old you are not in our records");
}

//for loops:
for( var i=0;i<5;i++){
  console.log("Current value is: ", i);
}

//Defining function without arguments
function myfunc() {
  console.log("My name is divya");
}

//Calling the function
myfunc();

//Defining function with arguments
function printname(name,y_n) {
  console.log("Hello ",name,",Are you coming to the party today?",y_n);

}
//Calling the function above twice with different arguments
printname("priyanka","yes");
printname("Deepika","No");

//Event Handling,button clicking

function buttonClicked()
{
  console.log("Button Clicked");
  //document.getElementById("text").innerHTML="Do it quickly!";
  //console.log(document.getElementById("text"));//to view the code
  //console.log(document.getElementById("text").innerHTML);//to view the value
  var customText = document.getElementsByClassName("my-input");
  var results= document.getElementById("text");
  var textArea = document.getElementsByClassName("my-textarea");

  results.innerHTML = "Hello " + customText[0].value + "<br />";//concatenating with name

  console.log(textArea);
  results.innerHTML +="Message: " + textArea[0].value;
}
var btn=document.getElementById("go-button");

btn.addEventListener("click",buttonClicked);

//Arrays
var hobbies=["pizza","dancing","programming","music"];
console.log(hobbies);
console.log("USING POP FUNCTION");
console.log(hobbies.pop());//pops out from the right ended
console.log("I no longer enjoy ",hobbies.pop());//another way of using pop function'
hobbies.push("Badminton");//appending an item
console.log(hobbies);
hobbies[2];//accessing third element in the list , since index starts from 0
console.log("length of the array: ",hobbies.length);
console.log("last element of the array: ",hobbies[hobbies.length-1]);

//Using for with arrays :
hobbies.forEach(function(item, index){
  console.log("i like ",item,index);
});

//Remove item from front:
console.log(hobbies.shift());

//To add an item to the begining
hobbies.unshift("writing");
console.log(hobbies);

//to get the index of a particular string in the array:
var indexnum=hobbies.indexOf("Badminton");
console.log(indexnum);

console.log(hobbies);

//checking elements of Arrays
if(hobbies.indexOf('writing') > -1)
{
  console.log("I like writing");
}
else {
  console.log("I do not like writing");
}

//functions: parameters and return value
function saysomething(phrase)
{
  console.log("You said: "+phrase);

}

function getphraselength(phrase)
{
  var l=phrase.length;
  return l;
}

var p="This is a phrase.";
saysomething(p);

var thislength = getphraselength("This is a slightly longer sentence");
console.log(thislength);

//Multiple paraemeters in a function
function getlength(phrase,another)
{
  var len=phrase.length + another.length;

  return len;
}

//Flexible function parameters
function getp(phrase,another)
{
   var leng=phrase.length;

   if (typeof another !== "undefined"){
     leng+=another.length;
   }

   function printboth()
  {

    return phrase + " " + another;
  }

  return printboth();
}

var p1="Such a beautiful day,Lets head out today :)";
var p2="Hey there,gorgeous! ";

var new_length=getlength(p1,p2);
console.log(new_length);

var computed=getp(p2,p1);
console.log(computed);

//function to sort numbers and strings
var numbers=[43, 56, 601, 100, 45, 10, 68, 34];
var words=["Apple","Pear","Coconut","Pizza","Burgers","Banana"];

var sorted_numbers=numbers.sort(function(a,b){return a-b; });//numerically sort an array
console.log(sorted_numbers);

var sorted_words=words.sort();//sorting words alphabetically
console.log(sorted_words);

//function to find missing value
function missing_num(num)
  {
    var missing=-1;
    for(var i=0;i<=num.length;i++)
    {
      if(num.indexOf(i)==-1)
      {
        missing=i;
      }
    }
    return missing;

  }
  var num=[3,8,7,9,6,1,12,18,5,14,2,19,16,11,10,13,15,17,20];//missing number here is 4, given numbers from 1 to 20 jumbled
  console.log(missing_num(num));

//classes and objects in javascript:
  class Animal
  {
    constructor(name, height, weight)
    {
      console.log("Created Animal name:",name,"height:",height,"weight:",weight);
      this.name=name;
      this.height=height;
      this.weight=weight;
    }
    namelength()
    {
      return this.name.length;
    }

  }

  Animal.planet="Earth";//Defining the value outside class

  var dog = new Animal("Fido", 25, 90);//instantiated object
  var fish = new Animal("Goldie", 2, 0.2);

  console.log(dog.namelength());
  console.log(fish.namelength());

  console.log(dog.constructor.planet);
  console.log(fish.constructor.planet);

//Extending classes
class Dog extends Animal
{
  constructor(name, height, weight, barkVolume, color)
  {
    super(name, height, weight);
    this.barkVolume=barkVolume;
    this.color=color;
  }
  bark()
  {
    if(this.barkVolume>50)
    {
      console.log(this.name,"barks loudly! (volume:",this.barkVolume,")");
    }
    else {
      console.log(this.name,"barks timidly! (volume:",this.barkVolume,")");
    }
  }
}

class Fish extends Animal
{
  constructor(name, height, weight, swimspeed)
  {
    super(name, height, weight);
    this.swimspeed=swimspeed;
  }
  swim()
  {
    if(this.swimspeed>50)
    {
      console.log(this.name,"swims around quickly! (speed:",this.swimspeed + ")");
    }
    else
    {
        console.log(this.name,"swims around slowly! (speed:",this.swimspeed + ")");

      }
    }
  }


var king=new Dog("king", 45, 92, 72, "red");
king.bark();

var Goldie=new Fish("Goldie",2,0.1,43);
Goldie.swim();
