var app = angular.module('myBlogApp', ['ngRoute', 'myBlogApp.controllers', 'myBlogApp.services']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller:"WelcomeController",
			templateUrl: "../views/blogposts.html"
		})
		.when('/newpost', {
			controller: "PostController",
			templateUrl: "../views/newpost.html"
		})
		.otherwise({
			redirectTo: '/'
		});
		console.log('inside $routeProvider')
});

	// app.config(function($routeProvider){
	// 	$routeProvider
	// 		.when('/', {
	// 			controller: "WelcomeController",
	// 			templateUrl: "views/welcome.html"
	// 		})
	// 		.when('/tweets', {
	// 			controller: "TweetsController",
	// 			templateUrl: "views/tweets.html"
	// 		})
	// 		.otherwise({
	// 			redirectTo: '/'
	// 		});	
	// });


