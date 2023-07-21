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
let login_user =  JSON.parse(localStorage.getItem("urban_company_login")) || {}
// let urban_users_mobile = JSON.parse(localStorage.getItem('urban_company_users')) || []

function HP_Login() {
  if(document.getElementById('HP-Login-signUp').innerText=="Logout"){
    localStorage.setItem('urbanCompany', JSON.stringify([]))

    localStorage.setItem('urban_company_login', JSON.stringify({}))
    document.getElementById('HP-Login-signUp').textContent="Login / SignUp"
    window.location.reload()
  }else{
     
  }
    document.getElementById("HP-mySidenav").style.width = "25%";
  }




let check_otp = ""
function HP_closeNav() {
    document.getElementById("HP-mySidenav").style.width = "0";
}

function HP_loginbuttons(){
    document.getElementById("HP-mySidenav").style.width = "25%";
     
    let check_login_input = document.getElementById('phone_num')
    let val = check_login_input.value
  
  
    let show_message = document.getElementById('message')
    if(val.length>10 || val.length<10){
      show_message.innerHTML = null
      let message = document.createElement('p')
      message.innerText = 'Please Enter Valid Number'
      show_message.append(message)
    }else{
      show_message.innerHTML = null
      // console.log(val)
      let urban_users_mobile = JSON.parse(localStorage.getItem('urban_company_users')) || []
      
      console.log(urban_users_mobile)
      let check_userExist =  urban_users_mobile?.filter(el=>el.user_mobile==val)  
      if(check_userExist.length>0){
            alert('already Exist')
            
      }else{
        urban_users_mobile.push({user_mobile:val})
        localStorage.setItem('urban_company_users', JSON.stringify(urban_users_mobile))
      }
      console.log(check_userExist)
      let check_otp_input_exist = document.getElementById('login_otp')
      if(check_otp_input_exist){
       
       
      }else{
        let contine_btn = document.getElementById('HP-navbar-loginbutton')
        contine_btn.disabled = true;
        let genrate_otp = document.createElement('p')
        check_otp  = generateOTP()
        genrate_otp.innerText = `Your OTP is ${check_otp}`
        genrate_otp.style.textAlign = 'center'
        show_message.append(genrate_otp)
        let otp=document.createElement("input")
        otp.setAttribute("class","HP-otp")
        otp.setAttribute('id', "login_otp")
        otp.setAttribute("placeholder", "   Enter OTP here")
       
        let btn=document.createElement("button")
        btn.setAttribute("class","HP-otp-btn")
        btn.innerText="LOGIN"
        btn.addEventListener("click", function(){
          myfunc()
    
        })
        document.querySelector("#HP-mySidenav").append(otp,btn)
      }
     
    }
     
  }
   

  function generateOTP() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

   
function myfunc(){
  let login_otp = document.getElementById('login_otp')
  let check_login_input = document.getElementById('phone_num').value
  let final_check_user = JSON.parse(localStorage.getItem('urban_company_users')) || []
  let check_userExist =  final_check_user?.filter(el=>el.user_mobile==check_login_input)  
  let show_message = document.getElementById('message')

  if(login_otp.value==check_otp && check_userExist.length>0){
    let check_otp_input_exist = document.getElementById('login_otp')
    let check_login_input = document.getElementById('phone_num')
    check_otp_input_exist.value = " "
    check_login_input.value = " "  
    localStorage.setItem('urban_company_login', JSON.stringify({login:true, user:check_userExist[0].user_mobile}))
    let login_check=document.getElementById('HP-Login-signUp')
    let check_login = JSON.parse(localStorage.getItem('urban_company_login'))
    if(check_login.login){
        login_check.textContent="Logout"
    }else{
         
    }
    
    document.getElementById("HP-mySidenav").style.width = "0";
  }else{
      
    
    let delete_message = document.getElementById('otp_wrong')
    if(delete_message){
      delete_message.remove()
    }
    let message = document.createElement('p')
    message.setAttribute('id', "otp_wrong")
    message.style.textAlign = 'center'
    message.textContent = "Wrong OTP.."
    // show_message.appendChild(message)
    show_message.insertAdjacentElement("beforeend", message);
  }
  
   

}

let login_check=document.getElementById('HP-Login-signUp')
let check_login = JSON.parse(localStorage.getItem('urban_company_login'))
if(check_login.login){
    login_check.textContent="Logout"
}else{
    
}
