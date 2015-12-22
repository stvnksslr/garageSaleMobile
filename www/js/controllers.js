angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller("BarcodeCtrl", function($scope, $cordovaBarcodeScanner) {

  console.log('ExampleController got called');
  $scope.scanBarcode = function() {
    console.log('scanBarcode function got called');
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      console.log(imageData);
      alert(imageData.text);
      console.log("Barcode Format -> " + imageData.format);
      console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };
    
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
