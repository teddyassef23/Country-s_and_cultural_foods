

var apikey_counter ='nozTYwVSNpTtXIsL9SAJtf3k3LY5Y1qrhgWswAZF';
var foodApi = 'www.themealdb.com/api/json/v1/1/filter.php?a=';
var selceted = document.getElementById("country");


country.addEventListener("change", (event) =>{
  var countryName = document.getElementById("country");
  var countryvalue = countryName.value;
  var country = countryName.options[countryName.selectedIndex].text;
  console.log("country value" , countryvalue)
  
  var fullApiCountery = "https://api.api-ninjas.com/v1/country?name=" + country + "&X-Api-Key=" + apikey_counter;
  fetch(fullApiCountery)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    var cuntry =     data[0].name;
  console.log("coutery :" + cuntry);
    var ApiCountery = "https://restcountries.com/v3.1/translation/" + cuntry ;
    fetch(ApiCountery)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("country :" , data);
    });


    // var capital =     data[0].capital;
    // var currency =     data[0].currency.name;
    // var name =     data[0].name;
    // var surface_area =     data.surface_area;
    // var life_expectancy_female =     data.life_expectancy_female;
    // var life_expectancy_male =     data.life_expectancy_male;
    // var region =     data.region;
    // var population =     data.population;
    // var internet_users =     data.internet_users;


document.getElementById("city").textContent = data[0].capital;
document.getElementById("name").textContent = data[0].name;
document.getElementById("Regin").textContent =  data[0].region;
document.getElementById("Populetion").textContent =   data[0].population;
document.getElementById("Serface").textContent = data[0].surface_area;
document.getElementById("Currency").textContent = data[0].currency.name;
    
    
    
    var countryApi ="https://www.themealdb.com/api/json/v1/1/filter.php?a=" + countryvalue;
    
    fetch(countryApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    
      var foods = [];

     for(let i = 0; i< data.meals.length  ; i++){
      foods.push(data.meals[i].strMealThumb);
     }
     for(let f = 0; f< foods.length; f++){
      document.getElementById(f).src = foods[f];
      }

    })


      console.log(" text of selceted 2 :" , text);
      console.log(" Value of selceted  :" , countrytext);
      


    });

});

function imageSwepe(imageId){
let swap = imageId ;

imageId = 0;
document.getElementById(0).id = swap;
this.id = 0;


}
