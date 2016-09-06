angular.module('AngularBlog',["ngSanitize",  'ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/pages/blog.html", controller: "BlogController", caseInsensitiveMatch: true })
    .when("/post/:id", {templateUrl: "partials/pages/blog_post.html", controller: "BlogPostController", caseInsensitiveMatch: true })
      .when("/search", {templateUrl: "partials/pages/search.html", controller: "SearchController", caseInsensitiveMatch: true })
    .when("/Contact", {templateUrl: "partials/pages/contact.html", controller: "PageController", caseInsensitiveMatch: true })
    .otherwise({templateUrl: "partials/pages/404.html", controller: "PageController", caseInsensitiveMatch: true });
}])
.controller("BlogController",["$scope","$http",
function($scope,$http){
  $http.get("Config/Blog.json").success(function(data){
        $scope.Model = data;
    });
}])
.controller("BlogPostController",["$scope","$http","$routeParams",
function($scope,$http,$routeParams){

  $http.get("Config/Blog_Post_1.json",{
    params:{
    id:  $routeParams.id
    }
  }).success(function(data){
        $scope.Model = data;
    });
}])
.controller("SearchController",["$scope","$http",
function($scope,$http){
  $http.get("Config/Search.json").success(function(data){
        $scope.Model = data;
    });
}])
.controller("PageController",["$scope","$http",
function($scope,$http){

}])

.controller("HeadController",["$scope","$http",
function($scope,$http){
  $http.get("Config/Head.json").success(function(data){
        $scope.Model = data;
    });
}])

.controller("MenuController",["$scope","$http",
function($scope,$http){
  $http.get("Config/Menu.json").success(function(data){
        $scope.Model = data;
    });
}]);
