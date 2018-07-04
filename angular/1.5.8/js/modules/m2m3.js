var module2= angular.module('m2',[]);

var controller1 = module2.controller('m2ctrl1', ['$http',
  function(){
    console.log("module2 -> m2ctrl1");
  }
]

);


var controller2 = module2.controller('m2ctrl2', ['$http', 'itemService',
  function(itemService){
    console.log("module2 -> m2ctrl2");
	itemService.f1();
  }
]

);

module2.factory( 'itemService', [
   function (){
	   var seasons = ['Spring', 'Summer', 'Fall' , 'Winter'];
	   return {
          f1: function(){
                 console.log("...> f1");
                },
          f2: function(){
                  console.log("...> f2");
                }
          };
	   
   }

]

);

//load other module in another file
//angular.module('m1');

//module 3
var module3 = angular.module('m3',['m2']);

module3.controller('mainCtrl', [ 'itemService' ,
  function(itemService){
	  console.log("module3 -> mainCtrl");
	  self = this;
	  self.name = ' m3 var : name';
	  itemService.f1();
  }
]);