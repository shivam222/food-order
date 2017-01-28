var app=angular.module('apple',['ngRoute','ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'rough3.html',
	controller  : 'love'})
	.when('/home',{templateUrl:'rough3.html',
	controller  : 'love'})
	.when('/account',{templateUrl:'account.html',
	controller  : 'account'})
	.when('/help',{templateUrl:'help.html',
	controller  : 'help'})
	.when('/order',{templateUrl:'order.html',
	controller : 'foryou'});
});

app.controller('love',function($scope,$http,$rootScope,$cookies){
	
	
	if($cookies.get('remail2')=='yep')
	{
	    
        $scope.log3=false;		
        $scope.sign=true;
        $scope.sign5=true;	
        $scope.log2=true;		
		$scope.sir=$cookies.get('remail');
	}
	else{
	$scope.log2=true;
	$scope.log3=true;
	}
	$scope.change=function(){
		$scope.sign=true;
		$scope.sign5=false;
		$scope.log2=false;
		$scope.log={"color":"green"};
		$scope.sign2={"color":"#666"};
	}
	$scope.change2=function(){
		$scope.sign=false;
		$scope.log2=true;
		$scope.log={"color":"#666"};
		$scope.sign2={"color":"green"};
	}
	//ajax request for login
	
	var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 2);
	$scope.submit=function(){
		var emailer=$scope.email2;
		
			$http({
    method: 'post',
    url: 'register2.php',
	data : $.param({
                name: $scope.email2,
				pass: $scope.password2
            }),
    headers: {
        'Content-Type': "application/x-www-form-urlencoded; "    //charset=utf-8
              }
                                    
	 })
	.success(function(data) {	
 	    $rootScope.loggged=data;
		if($rootScope.loggged!=false){
			$scope.log2=true;
			$scope.sir=emailer;
			//$scope.sir=$rootScope.loggged;
			$scope.log3=false;
			$scope.msg=" " ;
			$scope.sign5=true;
			$cookies.put('remail2','yep', {'expires': expireDate});
			$cookies.put('add',$rootScope.loggged, {'expires': expireDate});
			$cookies.put('remail',emailer , {'expires': expireDate});
			 $rootScope.registered="ok";
			
		}
		else{
			$scope.msg="something wrong";
		}
		
             

	 });
	}
	$scope.logout=function(){
		$cookies.remove('remail2');
		$cookies.remove('remail');
		$cookies.remove('add');
		$scope.sign5=false;
		$scope.log2=false;
		$scope.log3=true;
		$scope.sir="";
		$scope.msg="";
		
		
	}
	
});

app.controller('account',function($scope,$cookies,$http){
	   
	   $scope.ahead=true;
	   if($cookies.get('remail2')=='yep'){
		    $scope.back=true;
			$scope.ahead=false;

			$scope.em=$cookies.get('remail');
			$scope.ad=$cookies.get('add');
			
		}
	     $scope.update=function(){
			 
			     $http({
    method: 'post',
    url: 'changeadd.php',
	data : $.param({
                emaill:$cookies.get('remail'),
				add:$scope.newarea
            }),
    headers: {
        'Content-Type': "application/x-www-form-urlencoded; "    //charset=utf-8
              }
                                    
	 })
	.success(function(data) {	
	
	         if(data){
				 var expireDate = new Date();
                 expireDate.setDate(expireDate.getDate() + 2);
	             $cookies.put('add',$scope.newarea, {'expires': expireDate});
				 $cookies.put('remail2','yep', {'expires': expireDate});
				 $cookies.put('remail',$cookies.get('remail'), {'expires': expireDate});
			      $scope.em=$cookies.get('remail');
			      $scope.ad=$cookies.get('add');
	              $scope.newarea="Wow you have updated your address...go back and order food on new address:)";
			 }
	   });
			 
			 
			 
		 }	
		
		
});

app.controller('help',function($scope,$location,$anchorScroll){
	
	$scope.first=function(id){
		$location.hash(id);
        $anchorScroll();
	}
});



