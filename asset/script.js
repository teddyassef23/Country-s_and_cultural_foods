

var countryApi ="https://api.api-ninjas.com/v1/country?name=Ethiopia";
var apikey_counter ='nozTYwVSNpTtXIsL9SAJtf3k3LY5Y1qrhgWswAZF';
var foodApi = 'www.themealdb.com/api/json/v1/1/filter.php?a=';
var country ="united state";
var fullApiCountery = "https://api.api-ninjas.com/v1/country?name=" + country + "&X-Api-Key=" + apikey_counter;

fetch(fullApiCountery)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     
      var capital =     data.capital;
      var currency =     data[0].currency.name;
      var name =     data.name;
      var surface_area =     data.surface_area;
      var life_expectancy_female =     data.life_expectancy_female;
      var life_expectancy_male =     data.life_expectancy_male;
      var region =     data.region;
      var population =     data.population;
      var internet_users =     data.internet_users;
    });
