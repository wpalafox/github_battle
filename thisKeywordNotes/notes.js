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
sayNameMixin(you)





