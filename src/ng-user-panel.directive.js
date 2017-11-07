'use strict';

angular
.module('ng1UserPanel')
.controller('ng1UserPanelControllerMain', ['$scope', '$http', function($scope, $http) {

  // users and usersEmail rest api constants
  var userApiEndPoint = 'http://localhost:8080/api/v1/secure/admin/users/';
  var userEmailApiEndPoint = 'http://localhost:8080/api/v1/secure/admin/users/email/';

  if($scope.userModel === undefined || $scope.userModel === '')
  {
    $scope.showFlag = 'none';
  }
  else{
    $scope.showFlag = 'user';
  }

  $scope.getUser = function(){
    var url= '';
    if($scope.userId!=='' && $scope.userId!==undefined){
      url=userApiEndPoint + $scope.userId;
    }
    
    if ($scope.userEmail!=='' && $scope.userEmail!==undefined) {
      url=userEmailApiEndPoint + $scope.userEmail;
    }

    $http.get(url).success(function(response) {

      if(response){
        $scope.userModel = response;
        $scope.userId = response._id;
        $scope.userEmail = response.email;
        $scope.showFlag = 'user';
      }

      else{
        $scope.showFlag = 'noUser';
        $scope.message = 'User not found';
      }

    })
    .error(function(response, status){
      $scope.showFlag = 'noUser';
      if(status===404)
      {
        $scope.message = 'User not found';
      }
    });
  }; // end of getUser method
  
  if($scope.switchMode === 'edit')
  {  
    if($scope.userId)
    { 
      $scope.getUser(); // autoload data
    }
    $scope.showFlag = 'user';
  }
}])

.directive('ng1UserPanel', function() {
  return {
    controller: 'ng1UserPanelControllerMain',
    templateUrl: 'templates/user-picker.html',
    scope: {
      userModel: '=userModel',
      userId: '=userId',
      userEmail: '=userEmail',
      viewType: '=viewType',
      switchMode: '=switchMode',
      userType: '@userType'
    },

    link : function(scope)
    {
      scope.getTemplate = function(){

        var viewmode = scope.viewType.toLowerCase();

        if(viewmode === 'small' && scope.userEmail!=='')
        {
          return 'templates/smallpanel.html';
        }
        if(viewmode === 'large'){
          return 'templates/largepanel.html';
        }
        if(viewmode === 'medium'){
          return 'templates/mediumpanel.html';
        }

      };
    }
  };
});
