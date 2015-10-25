
var urlReq = "http://maps.googleapis.com/maps/api/directions/";

var fromToModule = angular.module('FromToModule', []);

fromToModule.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
]);

fromToModule.controller('FromToController', ['$scope', '$http', function($scope, $http) {
	this.reqParam = 'req';
	$scope.from = "Clube+da+Aeronáutica+de+Brasília";
	$scope.to = "Lakeside+-+SHTN+Trecho+2,+1+-+Asa+Norte,+Brasília,+DF/@-15.7893709,-47.8421923,16z";
	this.jsonReq = function() {
		this.reqParam = "json?origin=" + $scope.from + "&destination=" + $scope.to;
		var requestUrl = urlReq + this.reqParam;
		$http.get(requestUrl).success(function(response){
			var resMessage = JSON.stringify(response);
			alert(resMessage);
		});
	};
	
}]);




