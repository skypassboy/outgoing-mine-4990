function getData()
{
    let city=document.querySelector("#city").value;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1bfcbea4aee3792175be3e328f95db61"
    
    fetch(url)
    .then(function (res)
    {
      return res.json();
    })
    .then(function (res)
    {
      append(res)
      console.log(res)
    })
    .catch(function(err)
    {
      console.log(err);
    })
}
  
function getDataLocation(lat, lon)
{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bfcbea4aee3792175be3e328f95db61`;
    
    fetch(url)
    .then(function (res)
    {
      return res.json();
    })
    .then(function (res)
    {
      append(res);
      console.log(res);
    })
    .catch(function (err)
    {
      console.log(err);
    });
}
function append(data)
{
    let container=document.querySelector("#HP-Location-city")
    container.innerHTML=null
  
    let city=document.createElement("span")
    city.innerText=data.name;
  
    container.append(city)
}
function getLocation()
{
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position)
    {
      let crd = position.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      getDataLocation(crd.latitude, crd.longitude);
    }
}

function HPBF3prev(){
    document.getElementById('HP-banner-foot-3-slider-container').scrollLeft -= 270;
}

function HPBF3next()
{
    document.getElementById('HP-banner-foot-3-slider-container').scrollLeft += 270;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("HP-banner-Navbar-1")=x
    document.getElementById("logo").style.fontSize = "25px";
  }
}