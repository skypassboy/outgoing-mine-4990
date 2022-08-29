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
      localStorage.setItem("location", JSON.stringify(res.name))
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

//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
//  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
//    let navbar=document.createElement("div")
//    navbar.setAttribute("id","HP-banner-Navbar-sticky")

//    let searchdiv=document.createElement("div")
//    searchdiv.setAttribute("id","HP-banner-Navbar-sticky-search")

//    let searchimg=document.createElement("img")
//    searchimg.src="image/HP-Search.svg"

//    let searchbox=document.createElement("input")
//    searchbox.setAttribute("id", "HP-banner-Navbar-sticky")
//   searchbox.setAttribute("type","text")
//    searchbox.setAttribute("placeholder","Search for Services")

//    searchdiv.append(searchimg,searchbox)

//    let searchdiv2=document.createElement("div")
//    searchdiv2.setAttribute("id", "HP-banner-Navbar-sticky-service")

//    let image2=document.createElement("img")
//    image2.src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
//    image2.setAttribute("class","HP-service-image")

//    let title2=document.createElement("h4")
//    title2.innerText="Women's"
//    title2.setAttribute("class","HP-search-title")

//    searchdiv2.append(image2,title2)

//    let searchdiv3=document.createElement("div")
//    searchdiv3.setAttribute("id", "HP-banner-Navbar-sticky-service")

//    let image3=document.createElement("img")
//    image3.src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
//    image3.setAttribute("class","HP-service-image")

//    let title3=document.createElement("h4")
//    title3.innerText="Salon for Men"
//    title3.setAttribute("class","HP-search-title")

//    searchdiv3.append(image3,title3)

//    let searchdiv4=document.createElement("div")
//    searchdiv4.setAttribute("id", "HP-banner-Navbar-sticky-service")

//    let image4=document.createElement("img")
//    image3.src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
//    image3.setAttribute("class","HP-service-image")

//    let title4=document.createElement("h4")
//    title4.innerText="Men's Therapy"
//    title4.setAttribute("class","HP-search-title")

//    searchdiv4.append(image3,title3)

//    navbar.append(searchdiv,searchdiv2,searchdiv3,searchdiv4)  
    
//  }
//}

function HP_Login() {
  if(document.getElementById('HP-Login-signUp').innerText=="Logout"){
    document.getElementById('HP-Login-signUp').textContent="Login / SignUp"
  }
    document.getElementById("HP-mySidenav").style.width = "25%";
}

function HP_closeNav() {
    document.getElementById("HP-mySidenav").style.width = "0";
}

function HP_loginbuttons(){
    document.getElementById("HP-mySidenav").style.width = "25%";

    let x=document.createElement("input")
    x.setAttribute("class","HP-otp")
    x.setAttribute("placeholder", "   Enter OTP here")

    let btn=document.createElement("button")
    btn.setAttribute("class","HP-otp-btn")
    btn.innerText="LOGIN"
    btn.addEventListener("click", function(){
      myfunc()
    })
    document.querySelector("#HP-mySidenav").append(x,btn)
}
function myfunc(){
  let y=document.getElementById('HP-Login-signUp')
  y.textContent="Logout"
  document.getElementById("HP-mySidenav").style.width = "0";
}
