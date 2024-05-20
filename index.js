 //#1 
   const createHelloWorld = function(){
    return function(...args){
        return "Hello World";
    }
   }

   //#2
   var createCounter = function(n){
    return function(){
      return n++;

    };
   };
   const counter = createCounter(10);
   counter()
   counter()
   counter()