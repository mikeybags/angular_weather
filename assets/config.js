weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.htm', 
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'partials/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'partials/forecast.html',
            controller: 'forecastController'
        })
});

weatherApp.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://api.openweathermap.org/**'
    ]);
}]);
