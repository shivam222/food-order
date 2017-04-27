var app=angular.module('apple',['ngRoute','ngCookies','ngStorage']);

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
	.when('/order',{templateUrl:'order2.html',
	controller : 'order2'})
	.when('/summary',{templateUrl:'summary.html',
	controller : 'summary'})
	.when('/last',{templateUrl:'last.html',
	controller : 'last'});
});

app.controller('love',function($scope,$http,$rootScope,$cookies){
	//address
	
	$scope.sector="Sector";
	document.getElementById("sector").value = $scope.sector;
	$scope.sectore=function(par){
		if(par==1){
			$scope.sector="sec-58";
			document.getElementById("sector").value = $scope.sector;
		}
		else if(par==2){
			$scope.sector="sec-56";
			document.getElementById("sector").value = $scope.sector;
		}
		
	}
	
	
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
		 
		      $scope.update2=function(){
				  
				  if($scope.npass!=$scope.n2pass){
					  alert("Your new password was different in confirming field...try again!" );
				  }
			 else{
			     $http({
    method: 'post',
    url: 'changepass.php',
	data : $.param({
                emaill:$cookies.get('remail'),
				npass:$scope.npass,
				opass:$scope.opass
				
            }),
    headers: {
        'Content-Type': "application/x-www-form-urlencoded; "    //charset=utf-8
              }
                                    
	 })
	.success(function(data) {	
	
	         if(data==true){
				alert("your password is updated...logout then login with new password now")
                   
			 }
			 else{
				 alert("Something was wrong ....password not changed..try again");
			 }
	   });
			 
			 
			  } 
		 }
		
		
});

app.controller('help',function($scope,$location,$anchorScroll){
	
	$scope.first=function(id){
		$location.hash(id);
        $anchorScroll();
	}
});

/*app.controller('order',function($scope,$http,$rootScope,$localStorage){
	
	$localStorage.qty=0;
	$scope.qty=$localStorage.qty;
	$http({
  method: 'GET',
  url: 'thali.php'
}).success(function(response) {
    $scope.items=response;
	var l=$scope.items.length;
	$localStorage.cost=$scope.items[l-1];
	$scope.cost=$localStorage.cost;
	$scope.items.pop();
	  });
	  
	 $scope.thaliqty=function(para){
		 if(para=="add"){
			 $localStorage.qty=$localStorage.qty+1;
			 $scope.qty=$localStorage.qty;
		 }
		 else if(para=="sub" && $localStorage.qty>0){
			 $localStorage.qty--;
			 $scope.qty=$localStorage.qty;
		 }
	 }
	 
	 $http({
  method: 'GET',
  url: 'menu.php'
}).success(function(response) {
  
   $localStorage.menu=response;
   $scope.menu=$localStorage.menu;
});
$http({
  method: 'GET',
  url: 'menuPrice.php'
}).success(function(response2) {
  
   $localStorage.menuPrice=response2;
   $scope.menuPrice=$localStorage.menuPrice;
    var quantity=[];
   for(var v=0;v<response2.length;v++){
	   quantity[v]=0;
   }
   $localStorage.special=quantity;
   $scope.special=$localStorage.special;
});
$scope.degrade=function(now){
	if($localStorage.special[now]>0)
	   $localStorage.special[now]--;
       $scope.special[now]= $localStorage.special[now];
}
$scope.upgrade=function(now){
        $localStorage.special[now]++;	
		$scope.special[now]= $localStorage.special[now];
}
/*$scope.summary=function(){
	console.log($scope.special);
	console.log($scope.qty);
}*/

app.controller('order2',function($scope,$http,$rootScope,$localStorage){
	
	//windsor
		 $http({
  method: 'GET',           
  url: 'menuw.php'
}).success(function(response) {
  console.log(response);
   $localStorage.menuw=response;
   $scope.menuw=$localStorage.menuw;
});
$http({
  method: 'GET',
  url: 'menuPricew.php'
}).success(function(response2) {
  
   $localStorage.menuPricew=response2;
   $scope.menuPricew=$localStorage.menuPricew;
    var quantityw=[];                          
   for(var v=0;v<response2.length;v++){
	   quantityw[v]=0;
   }
   $localStorage.special=quantityw;
   $scope.special=$localStorage.special;
   $scope.first=[];
 for(var v=0;v<$localStorage.menuw.length;v++){
	//console.log($localStorage.special[0]);
	 $scope.first[v]={steyn:$localStorage.menuw[v],woakes:$localStorage.menuPricew[v],lee:$localStorage.special[v]};
   }
});

//tring

  

//steyn:$scope.menuw[v],woakes:$scope.menuPricew[v],lee:$scope.special[v]
//console.log($localStorage.special[0]);

//
$scope.degrade=function(now){
	if($localStorage.special[now]>0){
	   $localStorage.special[now]--;
       $scope.special[now]= $localStorage.special[now];
	   $scope.first[now].lee--;}  
}
$scope.upgrade=function(now){
        $localStorage.special[now]++;	
		$scope.special[now]= $localStorage.special[now];
		$scope.first[now].lee++;
}
//12 22
		 $http({
  method: 'GET',           
  url: 'menu12.php'
}).success(function(response) {
   $localStorage.menu12=response;
   $scope.menu12=$localStorage.menu12;
});
$http({
  method: 'GET',
  url: 'menuPrice12.php'
}).success(function(response2) {
  
   $localStorage.menuPrice12=response2;
   $scope.menuPrice12=$localStorage.menuPrice12;
    var quantity12=[];                          
   for(var v=0;v<response2.length;v++){
	   quantity12[v]=0;
   }
   $localStorage.special12=quantity12;
   $scope.special12=$localStorage.special12;
    $scope.second=[];
 for(var v=0;v<$localStorage.menu12.length;v++){
	//console.log($localStorage.special[0]);
	 $scope.second[v]={steyn:$localStorage.menu12[v],woakes:$localStorage.menuPrice12[v],lee:$localStorage.special12[v]};
   }
});
$scope.degrade2=function(now){
	if($localStorage.special12[now]>0){
	   $localStorage.special12[now]--;
	$scope.special12[now]= $localStorage.special12[now];
	$scope.second[now].lee--;
	}
}
$scope.upgrade2=function(now){
        $localStorage.special12[now]++;	
		$scope.special12[now]= $localStorage.special12[now];
		$scope.second[now].lee++;
}
});

app.controller('summary',function($scope,$rootScope,$localStorage){
	$localStorage.names=[];
	$scope.names=$localStorage.names;
	$localStorage.stock=[];
	$scope.stock=$localStorage.stock;
	$localStorage.prices=[];
	$scope.prices=$localStorage.prices;
	$scope.totalPriceI=0;
	var d = new Date();
	//disable the slots acc.
	
	if((d.getHours()==20 && d.getMinutes>=31)|| (d.getHours()>=21 && d.getHours()<0 ) ){
		$scope.one=true;
		}
	if((d.getHours()==21) || (d.getHours()>=22 && d.getHours()<0 )){
		$scope.two=true;
	}
   
	//disable the path to last page
	$scope.isDisable=function(){
		if((''+$scope.mobii).length==10 && ($scope.optradio==1||$scope.optradio==2)){
			$localStorage.mob=$scope.mobii;
			$localStorage.tslot=$scope.optradio;
			return false;
			
		}
		else{
		$scope.mobmsg="Enter Mob. first";
		return true;
		}
		}
		
	//$scope.thaliq=$localStorage.qty;
	//$scope.thalip=$localStorage.cost*$localStorage.qty;
	var len=$localStorage.special.length;
	var len2=$localStorage.special12.length;
	for(var l=0;l<len;l++){
		if($localStorage.special[l]>0){   //making of array for names,price,qty.
			$localStorage.names.push($localStorage.menuw[l]);
			$scope.names=$localStorage.names;
			$localStorage.stock.push($localStorage.special[l]);
			$scope.stock=$localStorage.stock;
			$localStorage.prices.push($localStorage.menuPricew[l]*$localStorage.special[l]);
			$scope.prices=$localStorage.prices;
			$scope.totalPriceI=$scope.totalPriceI+($localStorage.menuPricew[l]*$localStorage.special[l]);
		}
	}
	for(var l=0;l<len2;l++){
		if($localStorage.special12[l]>0){   //making of array for names,price,qty.
			$localStorage.names.push($localStorage.menu12[l]);
			$scope.names=$localStorage.names;
			$localStorage.stock.push($localStorage.special12[l]);
			$scope.stock=$localStorage.stock;
			$localStorage.prices.push($localStorage.menuPrice12[l]*$localStorage.special12[l]);
			$scope.prices=$localStorage.prices;
			$scope.totalPriceI=$scope.totalPriceI+($localStorage.menuPrice12[l]*$localStorage.special12[l]);
		}
	}
	$localStorage.total=$scope.totalPriceI;
	$scope.total=$localStorage.total;
	if($localStorage.total<50){
		$scope.final1=true;
		$scope.less=true;
		$scope.lessTotal="Your total is less than 50:(";
	}
	
	
	
});
app.controller('last',function($scope,$rootScope,$cookies,$localStorage,$http,$window){
	run=0;
	$scope.registerd=true;
	//for reg. users do this
	if($cookies.get('remail2')=='yep'){
		$scope.nRegister=true;
		$scope.registerd=false;
		$scope.number=$localStorage.mob;
		$scope.mailer=$cookies.get('remail');
		$scope.address=$cookies.get('add');
		$scope.total=$localStorage.total;
	}
	else{
		$scope.number=$localStorage.mob;
		$scope.total=$localStorage.total;
		$scope.namez=$localStorage.names;
		$scope.stockz=$localStorage.stock;
		$scope.namenstock=[];
		for(var k=0;k<$scope.namez.length;k++){
			$scope.namenstock.push($scope.namez[k]+"-"+$scope.stockz[k]);
		}
		document.getElementById("namenstock").value = $scope.namenstock;
		console.log($scope.namenstock);
		document.getElementById("numm").value = $scope.number;
		document.getElementById("tot").value = $scope.total;
		//document.getElementById("thaliz").value = $localStorage.qty;
		document.getElementById("slot").value = $localStorage.tslot;
		
	}
	  //update address as in account section
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
	.success(function(data) {	             //success of update add operations
	
	         if(data){
				 var expireDate = new Date();
                 expireDate.setDate(expireDate.getDate() + 2);
	             $cookies.put('add',$scope.newarea, {'expires': expireDate});
				 $cookies.put('remail2','yep', {'expires': expireDate});
				 $cookies.put('remail',$cookies.get('remail'), {'expires': expireDate});
			     // $scope.em=$cookies.get('remail');
			      //$scope.ad=$cookies.get('add');
				  $scope.address=$cookies.get('add');
	              $scope.newarea="Wow you have updated your address...go back and order food on new address:)";
			 }
	   });
			 
			 
			 
		 }
	$scope.PlaceIt=function(){
		//registered users order code
	
		      		     $http({
    method: 'post',
    url: 'placeIt.php',
	data : $.param({
                email2:$cookies.get('remail'),
				mob2:$localStorage.mob,
				tot2:$localStorage.total,
				namearr:$localStorage.names,
				pricearr:$localStorage.prices,
				stockarr:$localStorage.stock,
				area2:$cookies.get('add'),
				//thalis:$localStorage.qty,
				tslot:$localStorage.tslot
				}),
    headers: {
        'Content-Type': "application/x-www-form-urlencoded; "    //charset=utf-8
              }
                                    
	 })
	.success(function(data) {	             //success of update add operations
	          if(data){
				  alert("Your order is placed");
				  $window.location.href="http://localhost:553/GharKhaana/rough.html#/order";
				  
			  }
			  if(!data){
				  alert("some error has occured");
			  }
	           
	   });
		
	}
});


