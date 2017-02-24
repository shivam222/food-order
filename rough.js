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
	controller : 'order'})
	.when('/summary',{templateUrl:'summary.html',
	controller : 'summary'})
	.when('/last',{templateUrl:'last.html',
	controller : 'last'});
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
var run=0;//to check if order was first opened to summary
app.controller('order',function($scope,$http,$rootScope){
	
	$rootScope.qty=0;
	$http({
  method: 'GET',
  url: 'thali.php'
}).success(function(response) {
    $scope.items=response;
	var l=$scope.items.length;
	$rootScope.cost=$scope.items[l-1];
	$scope.items.pop();
	  });
	  
	 $scope.thaliqty=function(para){
		 if(para=="add"){
			 $rootScope.qty=$rootScope.qty+1;
		 }
		 else if(para=="sub" && $rootScope.qty>0){
			 $rootScope.qty--;
		 }
	 }
	 
	 $http({
  method: 'GET',
  url: 'menu.php'
}).success(function(response) {
  
   $rootScope.menu=response;
   
});
$http({
  method: 'GET',
  url: 'menuPrice.php'
}).success(function(response2) {
  
   $rootScope.menuPrice=response2;
    var quantity=[];
   for(var v=0;v<response2.length;v++){
	   quantity[v]=0;
   }
   $rootScope.special=quantity;
});
$scope.degrade=function(now){
	if($rootScope.special[now]>0)
	   $rootScope.special[now]--;
}
$scope.upgrade=function(now){
        $rootScope.special[now]++;	
}
/*$scope.summary=function(){
	console.log($scope.special);
	console.log($scope.qty);
}*/

run=1;
});
app.controller('summary',function($scope,$rootScope){
	$rootScope.names=[];
	$rootScope.stock=[];
	$rootScope.prices=[];
	$scope.totalPriceI=0;
	if(run==0)
	{
		$scope.summor=true;
		$scope.msg="First go to \"order\" and order something";
	}
	else{
	$scope.isDisable=function(){
		if((''+$scope.mobii).length==10){
			return false;
			$rootScope.mob=$scope.mobii;
		}
		else{
		return true;
		}
		}
	$scope.thaliq=$rootScope.qty;
	$scope.thalip=$rootScope.cost*$rootScope.qty;
	var len=$rootScope.special.length;
	for(var l=0;l<len;l++){
		if($rootScope.special[l]>0){
			$rootScope.names.push($rootScope.menu[l]);
			$rootScope.stock.push($rootScope.special[l]);
			$rootScope.prices.push($rootScope.menuPrice[l]*$rootScope.special[l]);
			$scope.totalPriceI=$scope.totalPriceI+($rootScope.menuPrice[l]*$rootScope.special[l]);
		}
	}
	$rootScope.total=$scope.thalip+$scope.totalPriceI;
	if($rootScope.total<50){
		$scope.final1=true;
		$scope.less=true;
		$scope.lessTotal="Your total is less than 50:(";
	}
	
	}
	
});
app.controller('last',function($scope,$rootScope,$cookies){
	run=0;
	$scope.registerd=true;
	if($cookies.get('remail2')=='yep'){
		$scope.registerd=false;
		
	}
	
});


