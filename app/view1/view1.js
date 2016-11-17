'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'authService', function( $scope, auth ) {
  var vm = $scope;
  vm.login = function() {
    auth.login( vm.user );
  };
  vm.clear = function() {
    $scope.user.username = "";
    $scope.user.password = "";
  };
  vm.isConnected = function(){
    auth.isConnected();
  };
  vm.logout = function() {
    auth.logout (vm.user);
  };
}]);