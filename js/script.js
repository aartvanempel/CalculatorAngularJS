var app = angular.module("MyApp", []);

app.controller("Calculator", function($scope) {
  // global vars
  var operator;
  var firstNum;
  // initial display
  $scope.display = "";
  // number input
  $scope.number = function(numberValue) {
    $scope.display += numberValue.toString();
  };
  // operator
  $scope.operator = function(operatorValue) {
    operator = operatorValue;
    firstNum = parseInt($scope.display);
    $scope.display = "";
  };
  // calculate
  $scope.calculate = function() {
    var result;
    var secondNum = parseInt($scope.display);

    if (operator == "+") {
      result = firstNum + secondNum;
    }
    if (operator == "-") {
      result = firstNum - secondNum;
    }
    if (operator == "/") {
      result = firstNum / secondNum;
    }
    if (operator == "*") {
      result = firstNum * secondNum;
    }
    $scope.display = result;
  };
  // clear display
  $scope.clear = function() {
    $scope.display = "";
  };
});
