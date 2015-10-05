//The action to call the parse service should be here.

var app = angular.module('myBlogApp.services', ['ngRoute','ngResource']);
//app.factory('ParseData',['', []]);
app.factory('WalterBlogAngular',['$http', function($http){
var reqHeaders = {
     "X-Parse-Application-Id": "NRdis21qc6R0v7YxohvffVoUfaslCLkD29tNcVIf",
     "X-Parse-REST-API-Key": "m886VcoixE7aRXEKkudmjnRzKNz25QWkprhybLW4",
     "Content-Type": "application/json"
};
var parseURL = 'https://api.parse.com/1/classes/Post';

var ParseFactory ={};

ParseFactory.getItems = function() {
    return $http({
        method : 'GET',
        url : parseURL,
        headers: reqHeaders
      
    }).then(function(response) {
        return response.data;
    });
    console.log('inside ParseFactory getItems')
};

ParseFactory.postItem = function(item) {
    return $http({
        method: 'POST',
        url: parseURL,
        headers : reqHeaders,
        data: item
    }).then(function(response) {
        return response;
    });
    console.log('inside ParseFactory postItems')
}

return ParseFactory;
}]);


