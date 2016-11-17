'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.authService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'authService', function( $scope, auth) {
  var vm = $scope;
  vm.name = auth.user.username;

  vm.displayName = function() {
    var bonjour = "Bonjour " + vm.name;
    console.log(bonjour);
    return bonjour;
  };

  vm.addUser = function() {
    vm.userList.push({name: vm.name});
  };

  vm.userList = [
    { name: 'kevin'},
    { name: 'jean'},
    { name: 'pierre'}
  ];
  vm.isConnected = function() {
    auth.isConnected();
  }

}]);
