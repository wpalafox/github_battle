/*
-- Impolicit Binding
-- Explicit Binding
-- new Binding
-- window Binding 
*/

//Implicit Binding 
//Left of the Dot at Call Time 


/*The "this" Keyword Pt1: Intro and Implicit Binding*/


//1
var me = {
  name: 'Tyler',
  age: 25,
  sayName: function(){
  	console.log(this.name);
  }
};

me.sayName();

//2

var sayNameMixin = function(obj){
	obj.sayName = function(){
		console.log(this.name);
	};
};

var me = {
	name: 'Will',
	age: 27
};

var you = {
	name: 'Joey',
	age: 21

};

sayNameMixin(me);
sayNameMixin(you);


me.sayName();
you.sayName();

//3

var Person = function(name, age){
	return {
		name: name,
		age: age,
		sayName: function(){
			console.log(this.name);
		},
		mother: {
			name: 'Stacey',
			sayName: function(){
				console.log(this.name);



			}




		}
	};
 };


var jim = Person('Jim', 42);
jim.sayName();
jim.mother.sayName();



/*The "this" Keyword Pt2: Explicit Binding with .call
, .apply, and .bind */


//Explicit Binding
// call, apply, bind 

var sayName = function(lang1, lang2, lang3){
		console.log('my name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
	}

var skrillex = { 
	name: 'Skrillex',
	age: 34 
	
};

var languages = ['Javascript', 'Ruby', 'Python'];

//We want to call the function within the context of Stacey 

sayName.call(skrillex, languages[0], languages[1], languages[2]);


//What if we could just pass in languages? 
// With .apply, you can pass in an array of arguments instead of each individually



var sayName = function(lang1, lang2, lang3){
		console.log('my name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
	}

var skrillex = { 
	name: 'Skrillex',
	age: 34 
	
};

var languages = ['Javascript', 'Ruby', 'Python'];

//We want to call the function within the context of Stacey 

sayName.apply(skrillex, languages);



//.bind will return a new function, instead of invoking the original function


var sayName = function(lang1, lang2, lang3){
		console.log('my name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
	}

var skrillex = { 
	name: 'Skrillex',
	age: 34 
	
};

var languages = ['Javascript', 'Ruby', 'Python'];

//We want to call the function within the context of Stacey 

var newFn = sayName.bind(skrillex, languages[0], languages[1], languages[2]);
console.log("CHECK");
newFn();


























