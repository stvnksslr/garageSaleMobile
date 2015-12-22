angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BarcodeCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
