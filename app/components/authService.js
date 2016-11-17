angular.module('myApp.authService', [])
  .factory('authService', authService);

authService.$inject = ['$http'];

function authService($http){
  "use strict";
  //var host = 'http://localhost:8000';
  var user = {
    username: 'test',
    password: 'test'
  };
  var connected = false;

  var service = {
    login: login,
    user: user,
    logout: logout,
    isConnected: isConnected
  };
  //user = { password, username}
  function login(userInfos) {

    if (userInfos.username === user.username &&
      userInfos.password === user.password){
      console.log("user logged");
      connected = true;
      return true;
      //redir vers view2
    }
    else {
      console.log("user unauthorized");
      connected = false;
      return false;
    }
    /*return $http.post(host+ '/user/login', user)
      .then(LoginComplete)
      .catch(LoginFailed);
    function LoginComplete(response) {
      console.log('test');
      return response.data;
    }
    function LoginFailed(err) {
      console.log('test2');
      return console.log("Error : " + err.data);
    }*/
  }
  function isConnected() {
    return connected;
  }
  function logout(user) {
    connected = false;
    //redir vers view1
  }
  return service;
}

