var module1= angular.module('m1',[]);

var controller1 = module1.controller('m1ctrl1', ['$http',
  function(){
    console.log("module1 -> m1ctrl1");
  }
]

);


var controller2 = module1.controller('m1ctrl2', ['$http',
  function(){
    console.log("module1 -> m1ctrl2");
  }
]

);

