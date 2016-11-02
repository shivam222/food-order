var app=angular.module('food',['ngRoute','ngCookies','ngAnimate']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'home.html'})
	.when('/home',{templateUrl:'home.html'})
	.when('/register',{templateUrl:'home.html'})
	.when('/login',{templateUrl:'home.html'})
	.when('/order',{templateUrl:'order.html'})
	.otherwise({redirectTo:'/'});
});