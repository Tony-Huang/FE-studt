var  app = angular.module('hello', []);

var controller = app.controller('MainCtrl',['$http',function($http) {
      var self = this;
      self.message= 'Hello ';

      self.changeMessage = function() {
        self.message = 'Goodbye';
		
	  }
	 
	  
   }  ]

   );