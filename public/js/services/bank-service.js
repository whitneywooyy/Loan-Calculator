var app = angular.module('LoanCalculator');

var interestRate;

app.service('BankService', function($http){
	this.getInterestRate = function(){
		return $http({
			method: "GET",
			url: "/interest_rate"
		});
	};
});	// End app.controller