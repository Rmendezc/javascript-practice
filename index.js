 //This is my personal coding dojo with my 30 days of Javascript and also applying real life solutions and also leet code developing environment
 
 //Day 1
   const createHelloWorld = function(){
    return function(...args){
        return "Hello World";
    }
   }

   //Day 2
   var createCounter = function(n){
    return function(){
      return n++;

    };
   };
   const counter = createCounter(10);
   counter()
   counter()
   counter()        
   //Day 3
