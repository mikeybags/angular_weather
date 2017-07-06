weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path('/forecast')
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',  function($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city || "New York, NY";
    $scope.days = $routeParams.days || '3';
    $scope.today = new Date();
    
    (function setToday(today) {
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
    })($scope.today);

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=8605d05ee34d72ccb4b362d1433bfaf1", { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days}, function() {
        if ($scope.convertToDate($scope.weatherResult.list[0].dt) < $scope.today) {
            $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: (parseInt($scope.days) + 1)});
        }
    });

    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

}]);