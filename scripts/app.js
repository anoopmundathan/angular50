// 1. Example with Vanila JavaScript
// var text = document.getElementById('txtInput');
// var spanValue = document.getElementById('nameDiv');
//
// text.addEventListener('keyup', () => {
//   var inputValue = text.value;
//   spanValue.innerHTML = inputValue;
// });

// 2. Example with jQuery

// $('#txtInput').on('keyup', function() {
//   $('#nameDiv').html($('#txtInput').val());
// });

// 3. Example with Backbone
// Model

// var model = new Backbone.model({
//   name: ''
// });
//
// // View
// model.on('change:name', function() {
//   $('#nameDiv').html(model.get('name'));
// });
//
// // Controller
// $('#txtInput').on('keyup', function() {
//   model.set('name', $('#txtInput').val());
// });

// var nameApp = angular.module('app', []);
// nameApp.controller('nameCtrl', ($scope) => {
//   $scope.firstName = "Anoop";
//   $scope.lastName = "Mundathan";
// });

(function() {

  var nameApp = angular.module('app', ['ngRoute']);

  nameApp.controller('nameCtrl', ($scope) => {
      $scope.firstName = "Anoop";

      // Watch those changes.
      $scope.$watch('lastName', (newValue, oldValue) => {
        console.log('new value is ' + newValue);
      });

     // This function is outside of the angular, so we have to manually apply
     // changes
      setTimeout(() => {
        $scope.lastName = "Mundathan";
        $scope.$apply();
        console.log($scope.lastName);
      }, 2000);
  });

  // ng-repeat Example
  nameApp.controller('arrayCtrl', ($scope) => {
    $scope.names = ['UK', 'US', 'HK', 'BA'];

    $scope.addItem = () => {
      $scope.names.push($scope.txtInput);
      $scope.txtInput = '';
    }

    $scope.removeItem = (name) => {
      var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
    };

  });

  // ng-repeat Example
  nameApp.controller('listCtrl', ($scope, $http) => {
    $scope.lists = ['L1', 'L2', 'L3', 'L4'];

    $scope.addList = () => {
      $scope.lists.push($scope.listInput);
      $scope.listInput = '';
    }

    $http.get('../data/countries.json').success(function(data) {
      console.log(data);
      $scope.countries = data;
    });
  });

  nameApp.config(($routeProvider) => {
    $routeProvider.
      when('/', {
        template: '',
        controller: ''
      }).
      when('/:country', {
        template: '',
        controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
      
    });

})();
