var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, BankService){
	var getRate = function(){
		BankService.getInterestRate().then(function(res){
			console.log("res", res);
			$scope.interest_rate = res.data;
			console.log("$scope.interest_rate", $scope.interest_rate);
		});
	};

	getRate();

	$scope.calculatePayment = function(){
		var interest = $scope.interest_rate / 100;
		var principal = parseInt($scope.principal());
		var amountOwed = interest * principal * 4;
		var total = amountOwed + principal;

		$scope.monthly_payment = (total / 48).toFixed(2);
	};
	
});	// End app.controller