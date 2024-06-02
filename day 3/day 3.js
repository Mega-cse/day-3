//1.
let obj1={name:"Person1",age:5};
let obj2={age:5,name:"Person1"};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

//2.
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data =JSON.parse(request.response);
    console.log(data);
    data.forEach(country=>console.log(country.flags));


//3.
data.forEach(country=>{
    console.log(country.name.common);
    console.log(country.region);
    console.log(country.subregion);
    console.log(country.population);
 })
}