//Logic for page actions here. 

var app = angular.module('myBlogApp.controllers', ['ngRoute']);

interface BlogPost {
	text: string;
	author?: string;
	date: Date;
}
app.controller('WelcomeController', ['$scope', 'WalterBlogAngular', function($scope, WalterBlogAngular){
	$scope.posts = [];
	WalterBlogAngular.getItems().then(function(blogPosts) {
		blogPosts.results.forEach(function(post) {
			$scope.posts.unshift(post);
		});
		// for (var i = 0; i < blogPosts.length; i++ ){
		// 	$scope.posts.push(blogPosts[i]);
		// }
	});
	
		$scope.submitPost = function() {
			//push to array, make spaces blank
			console.log('really inside submitPost!');
			var post = {
				text: $scope.post,
				//user: $scope.name,
				date: new Date()
			};
			
			WalterBlogAngular.postItem(post).then(function (response) {
				$scope.posts.unshift(post);
				
				console.log($scope.posts);
				
				$scope.post = null;
			});
		}
}]);

	app.controller('PostController', ['$scope', 'WalterBlogAngular', function($scope, WalterBlogAngular) {
		//$scope.name = '';
		$scope.post = '';
		$scope.posts = [];
		
		$scope.submitPost = function() {
			//push to array, make spaces blank
			console.log('inside submitPost!');
			var post: BlogPost = {
				text: $scope.post,
				//user: $scope.name,
				date: new Date()
			};
			
			$scope.post('../views/blogposts', post)
				.success(function() {
					console.log('I am inside the success function');
					$scope.post = '';
					$scope.posts.unshift(post);
				})
				.error(function(err) {
					console.log('I am inside the error function');
					console.error(err);
				});
	}
		
		
	WalterBlogAngular.getItems()
		.then(function(items) {
		console.log('inside controller getItems')
		});
		
	WalterBlogAngular.postItem()
		.then(function(items) {
		console.log('inside controller postItems')	
		});
		
	}]);
