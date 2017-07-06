weatherApp.service('cityService', function() {
    this.city = "";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=8605d05ee34d72ccb4b362d1433bfaf1", { get: { method: "JSONP" }});
        
        return weatherAPI.get({ q: city, cnt: days});
    }
}]);