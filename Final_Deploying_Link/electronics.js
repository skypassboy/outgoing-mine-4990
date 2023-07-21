let mainarr=[
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1642525912071-bdb3c7.png",
        content:"booked..."

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719676156-240dd2.png",
        content:"Switch&Socket"

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719395804-a998b1.png",
        content:"Fan"

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719407259-633488.png",
         content:"Light",

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1635834108092-f66585.png",content:"New launches",

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719402389-9ed486.png",content:"MCB & Fuse",
    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719395465-4f0855.png",content:"Inverter"

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719396997-85e940.png" , content:"Appliance"

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719388389-c252d9.png",content:"Wiring"

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719397464-5e3c72.png",content:"Door bell"

    },
    {
        image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639719393302-4148b0.png",content:"Looking for..."
    }
    

]
let append=(data)=>{
    let thsidebar2=document.getElementById("thsidebar2")
    thsidebar2.innerHTML=null
    data.forEach((el)=>{
        let img=document.createElement("img")
        img.src=el.image
        img.setAttribute("class","itemimg")
        let h3=document.createElement("h3")
        h3.innerText=el.content
        h3.setAttribute("class","content")
        let div=document.createElement("div")
        div.append(img,h3)
        div.setAttribute("class","item")
        div.addEventListener("click",function(){
            filtering(el.content)
        })
        thsidebar2.append(div)

    })

}
append(mainarr)

let main=[
{										
name:"Switch Replacement",
rating:" ★  4.81(5.5K)",
special:"5 mins",
price:79,
a:"₹30 off 2nd service onwards 1 Replacement of single switch",
b:"Spare parts cost not included",
c:"booked...",
d:""
},
{ 

name:"Socket Replacement",
rating:" ★ 4.82(3.2K)",	
price:109,
special:"10 mins",
a:"₹30 off 2nd service onwards	Replacement of single socket unit",
b:"Spare parts' cost not included",
c:"booked...",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067319062-3287ee.png"
},
{
name:"Switchboard repair",
rating:" ★ 4.82(40.8K)",
price:110,
special:"30 mins",
a:"₹41 off 2nd service onwards	Labor charges for Repair of one switchboard only.",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"booked...",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640069912643-d7bb98.png"
},
{ 
name:"Fan repair",
rating:" ★ 4.78(47.4K)",
price:199,
special:"30 mins",
a:"₹30 off 2nd service onwards	Labor charges for repair of ceiling", 
b:"wall or exhaust fan	Spare parts are sourced at an additional cost (market rate)",
c:"booked...",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067309934-db4a2e.png"
    },
    { 
    
name:"Tubelight Installation/Repair",
rating:" ★ 4.84(31.7K)",
price:129,
special:"30 mins",
a:"₹30 off 2nd service onwards	Labor charges for installation of one tube light",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"booked...",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640069913579-5855d8.png"
    },
    { 
name:"Ceiling Fan Installation",
rating:" ★ 4.83(27.4K)",
price:148,
special:"30 mins",
a:"₹29 off 2nd service onwards	Labor charges for Installation of ceiling", 
b:"exhaust or wall fan	Spare parts are sourced at an additional cost (market rate)",
c:"booked...",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640008611215-b93a9c.png"
    },
    { 										
name:"AC switchbox installation",
rating:" ★ 4.79(5.5K)",
price:369,
special:"30 mins",
a:"₹40 off 2nd service onwards	Labor charges for Installation of one AC switchbox",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Switch&Socket",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/categories/category_v2/category_9ed5e480.png"
    },
    {

name:"Switchboard installation",
rating:"  ★ 4.81(16.4K)",
price:279,
special:"30 mins",
a:"₹30 off 2nd service onwards	Labor charges for Installation of one Switchboard",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Switch&Socket",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067311459-eda798.png"
        },
        {


            
name:"Switchboard repair",
rating:" ★ 4.82(40.8K)",
price:110,
special:"30 mins",
a:"₹41 off 2nd service onwards	Labor charges for Repair of one switchboard only.",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Switch&Socket",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640069912643-d7bb98.png"
            },
{ 
name:"Switch/socket replacement",
rating:"★ 4.82(41.7K)",
price:109,
special:"30 mins",
a:"₹30 off 2nd service onwards",
b:"Replacement of one switch/ socket/ combination unit	Spare parts are sourced at an additional cost (market rate)",
c:"Switch&Socket",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067319062-3287ee.png"
},
{
name:"15+ Amp Switch Box",
rating:" ★ 4.81(2.1K)",
price:349,
special:"10 mins",
a:"Add	Labor charges for Installation of 1 heavy switchboard",
b:"(15+ amp)Spare parts are sourced at an additional cost (market rate)",
c:"Switch&Socket",

d:""
},
{										
name:"Ceiling fan regulator replacement",
rating:" ★ 4.80(19.8K)",
price:99,
special:"30 mins",
a:"30 off 2nd service onwards	Labor charges for Replacement of one ceiling fan regulator",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Fan",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639995505867-8b32bd.png"
},
{

name:"Decorative ceiling fan installation",
rating:" ★ 4.8(524)",
price:469,
special:"60 mins",
a:"Labor charges for Installation of fan with in-built light, music etc.",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Fan",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639724676895-5be62b.png"
},
{ 	
name:"Ceiling Fan Installation",
rating:" ★ 4.83(27.4K)",
price:148,
special:"30 mins",
a:"₹29 off 2nd service onwards	Labor charges for Installation of ceiling",
b:"exhaust or wall fan	Spare parts are sourced at an additional cost (market rate)",
c:"Fan",

d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640008611215-b93a9c.png"
},
{
name:"Fan repair",
rating:" ★ 4.78(47.4K)",
price:199,
special:"30 mins",
a:"₹30 off 2nd service onwards	Labor charges for repair of ceiling", 
b:"wall or exhaust fan	Spare parts are sourced at an additional cost (market rate)",
c:"Fan",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067309934-db4a2e.png"
},
{
name:"Fan replacement",
rating:" ★ 4.86(8.2K)",
price:239,
special:"60 mins",
a:"₹30 off 2nd service onwards	Labor charges for Replacement of ceiling",
b:"exhaust or wall fan	Spare parts are sourced at an additional cost (market rate)",
c:"Fan",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639994525978-aa7354.png"
},
{ 
name:"Fan uninstallation",
rating:" ★ 4.88(4.1K)",
price:139,
special:"30 mins",
a:"Labor charges for uninstallation of ceiling", 
b:"exhaust or wall fan	Spare parts are sourced at an additional cost (market rate)",
c:"Fan",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639994523464-65acf2.png"
    },
    
{ 									
name:"Bulbs installation (upto 5 bulbs)",
rating:" ★ 4.81(7.5K)",
price:139,
special:"1 hr 30 mins",
a:"Labor charges for installation of up to five bulbs",
b:"Spare parts are sourced at an additional cost (market rate)",	
c:"Light",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067290753-e66784.png"
},
{
name:"Bulb holder installation",
rating:" ★ 4.84(11.7K)",
price:119,
special:"20 mins",
a:"₹30 off 2nd service onwards	Labor charges for installation of one bulb holder",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Light",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640070639107-8d4afe.png"
},
{
name:"False ceiling light installation",
rating:" ★ 4.84(14.4K)",
price:219,
special:"30 mins",
a:"Installation of one decorative wall light",
b:"ceiling light or bed lamp	Spare parts are sourced at an additional cost (market rate)",
c:"Light",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067297083-55423b.png"
},
    { 

name:"Tubelight Installation/Repair",
rating:" ★ 4.84(31.7K)",
price:129,
special:"30 mins",
a:"₹30 off 2nd service onwards	Labor charges for installation of one tube light",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Light",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640069913579-5855d8.png"
    },
    {
name:"Chandelier installation (upto 6 bulbs)",
rating:" ★ 4.84(2K)",
price:549,
special:"60 mins",
a:"Labor charges for installation of one chandelier with up to six bulbs",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Light",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639728462653-4f65e2.png"
    },
    {
name:"Chandelier installation (more than 6 bulbs)",
rating:" ★ 4.70(228)",
price:1099,
special:"1 hr 30 mins",
a:"Labor charges for installation of one chandelier with more than 6 bulbs",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Light",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639728814075-9e5de9.png"
    },
    {									
name:"Modular Retrofit Smart Switches",
rating:" ★ 4.80(43)",
price:150,
special:"15 mins",
a:"Labor charges for installation & configuration of one smart modular switch",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"New launches",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639729320994-198284.png"
    },
{ 
name:"Smart appliance controller(Touch Panel/Smart plug)",
rating:" ★ 4.80(43)",
price:199,
special:"15 mins",
a:"Labor charges for installation & configuration of one smart plug/ touch panel",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"New launches",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1648751433217-7aec66.jpeg"
    },
    {	
name:"Converter Retrofit Wi-Fi Smart Switches",
rating:" ★ 4.76(52)",
price:199,
special:"15 mins",
a:"Labor charges for installation & configuration of one smart converter switch",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"New launches",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1648751434236-549691.jpeg"
        },
        { 
name:"EV Charger Installation (2 Wheeler)",
rating:" ★ 4.94(24)",
price:750,
special:"1 hr 30 mins",
a:"Installation of 1 charging station (at home) for a two wheeler EV",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"New launches",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1648751432384-4cc44c.jpeg"
            },
  {        
name:"WiFi CCTV installation",
rating:" ★ 4.70(1.3K)",
price:299,
special:"30 mins",
a:"Labor charges for installation of 1 wifi CCTV",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"New launches",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1647519310586-04dcc7.jpeg"
      },	
    {
name:"Home video bell",
rating:" ★ 4.73(54)",
price:600,
special:"45 mins",
a:"Labor charges for installation of 1 home video bell",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"New launches",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/categories/bigpictures/version-2-2/android/Android_CCTV.jpg"
    },
    {										
name:"3 Phase changeover switch installation",
rating:" ★ 4.80(511)",
price:369,
special:"30 mins",
a:"Labor charges for installation of one 3-phase changeover switch",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"MCB & Fuse",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067302146-9ea50e.png"
    },  
    {

    
name:"MCB fuse replacement",
rating:" ★ 4.78(4.4K)",
price:119,
special:"30 mins",
a:"Labor charges for replacement of one MCB fuse",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"MCB & Fuse",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639995506941-edb1af.png"
        },
    {
name:"Single pole MCB installation",
rating:" ★ 4.78(3.4K)",
price:119,
special:"1 hr 30 mins",
a:"Labor charges for installation of single pole MCB",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"MCB & Fuse",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639995516032-77a650.png"
        },
        {
            
name:"Sub meter installation",
rating:" ★ 4.81(538)",
price:319,
special:"60 mins",
a:"Labor charges for installation of one sub-meter with minor wiring work",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"MCB & Fuse",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067307688-80945e.png"
            },	
            {
                                    
name:"Single battery inverter installation",
rating:" ★ 4.76(4.4K)",
price:485,
special:"1 hr 30 mins",
a:"Labor charges for installation of single battery inverter",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Inverter",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067308350-b11851.png"
            },
            {
name:"Double battery inverter installation",
rating:" ★ 4.65(496)",
price:575,
special:"1 hr 30 mins",
a:"Labor charges for installation of double battery inverter",
b:"Spare parts are sourced at an additional cost (market rate)",
c:"Inverter",
d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639743632132-bbf9af.png"
            },
            {
name:"Inverter servicing",
rating:" ★ 4.71(10.1K)",
price:249,
special:"30 mins",
a:"Labor charges for servicing of one single/double battery inverter",b:"Spare parts are sourced at an additional cost (market rate)",c:"Inverter",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639743632132-bbf9af.png"},	
{name:"Stabilizer installation",rating:" ★ 4.82(2.4K)",price:179,special:"30 mins",a:"Labor charges for installation of one stabilizer unit",b:"Spare parts are sourced at an additional cost (market rate)",c:"Inverter",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639735363220-eb55d7.png"},
                                
{name:"TV installation (up to 48 inches)",rating:" ★ 4.84	(6.9K)",price:599,special:"30 mins",a:"Labor charges for installation or uninstallation of one TV set",b:"Spare parts are sourced at an additional cost (market rate)",c:"Appliance",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067308350-b11851.png"},	
{name:"TV installation (above 48 inches)",rating:" ★ 4.81	(2.6K)"	,price:750,special:"60 mins",a:"Labor charges for installation or uninstallation of one TV set",b:"Spare parts are sourced at an additional cost (market rate)",c:"Appliance",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640067285680-d7bee4.png"},
{name:"TV uninstallation",rating:" ★ 4.84	(2.3K)",price:189,special:"30 mins",a:"Labor charges for installation or uninstallation of one TV set",b:"Spare parts are sourced at an additional cost (market rate)",c:"",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640076768201-c56017.png"	},

{name:"Mini home theater installation",rating:" ★ 4.69	(1.1K)",price:319,special:"1 hr 30 mins",a:"Installation of a mini home theatre with wiring from TV to speaker",b:"Spare parts are sourced at an additional cost (market rate)",c:"Appliance",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640076769042-a4ce67.png"},

{name:"Stabilizer installation",rating:" ★ 4.82	(2.4K)",price:179,special:"30 mins",a:"Labor charges for installation of one stabilizer unit",b:"Spare parts are sourced at an additional cost (market rate)",c:"Appliance",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639735949715-ea9095.png"},	
                                
{name:"New internal wiring (per 5m)",rating:" ★ 4.76	(4K)",price:249,special:"60 mins",a:"Concealed conduit internal wiring for a new connection",b:"Spare parts and wires are procured at an additional cost (market rate)",c:"Wiring",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639738565631-307f88.png"},	
{name:"New wiring with casing (per 5m)",rating:" ★ 4.77	(5K)",price:349,special:"60 mins",a:"Wiring with outer casing and capping for a single connection",b:"Spare parts and wires are procured at an additional cost (market rate)",c:"Wiring",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640601400496-b2371a.jpeg"},	
{name:"New wiring without casing (per 5m)",rating:" ★ 4.75	(3.6K)",price:129,special:"30 mins",a:"Wiring without outer casing for a single connection",b:"Spare parts and wires are procured at an additional cost (market rate)",c:"Wiring",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640070547359-582347.png"},											
{name:"Door bell installation",rating:" ★ 4.81	(4.2K)",price:109,special:"30 mins",a:"₹30 off 2nd service onwards	Labor charges for installation of one doorbell",b:"Spare parts are sourced at an additional cost (market rate)",c:"Door bell",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1639739258650-ef1de9.png"},	
{name:"Door bell replacement",rating:" ★ 4.83	(4.6K)",price:109,special:"30 mins",a:"₹30 off 2nd service onwards	Labor charges for replacement of one doorbell",b:"Spare parts are sourced at an additional cost (market rate)",c:"Door bell",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640239725633-779eb5.png"},										
{name:"Custom repair/installation",rating:" ★ 4.79	(21.1K)",price:179,special:"10 mins",a:"Actual Price Based on Scope of Work and Rate Card.",b:"Visitation charges to be adjusted in the final invoice",c:"Looking for...",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640239725633-779eb5.png"},		
{name:"At home consultation for major work",rating:" ★ 4.71	(4.5K)",price:149,special:"10 mins",a:"Includes inspection charges",b:"Actual prices based on scope of work and rate card",c:"Looking for...",d:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1640239725633-779eb5.png"}		

]										
let package=(data)=>{
    let thbottomcontainerleftside=document.getElementById("thbottomcontainerleftside")
    thbottomcontainerleftside.innerHTML=null
    data.forEach((el)=>{
        let a=document.createElement("h2")
        a.innerText=el.name
        let b=document.createElement("h3")
        b.innerText=el.rating
        b.style="color:gray"
        let c=document.createElement("h3")
        c.innerText=` ₹ ${el.price}`
        let h=document.createElement("hr")
        let h1=document.createElement("hr")
        let d=document.createElement("li")
        d.innerText=el.special
        d.style="color:gray"
        let e=document.createElement("li")
        e.innerText=el.a
        e.style="color:gray"
        let f=document.createElement("li")
        f.innerText=el.b
        f.style="color:gray"
        let div=document.createElement("div")
        div.setAttribute("class","haircut")
        let div2=document.createElement("div")
        div2.setAttribute("class","addimg")
        let image=document.createElement("img")
        image.src=el.d
        image.setAttribute("class","avathar")
        let btn=document.createElement("button")
        btn.innerText="ADD"
        btn.setAttribute("class","btn")
        btn.addEventListener("click",function(){
            add(el)
        })
        div.append(a,b,c,d,e,f,h)
        div2.append(image,btn)
        thbottomcontainerleftside.append(div,div2)



    })
    
}
let filtering=(h3)=>{
    console.log(h3)
    result=main.filter(function(el){
        // console.log(el)
        return el.c==h3
        let thbottomcontainerrightside=document.getElementById("thbottomcontainerrightside")
        window.onscroll = function() {myFunction()};

        var sticky = thbottomcontainerrightside.offsetTop;
        function myFunction() {
if (window.pageYOffset >= sticky) {
thbottomcontainerrightside.classList.add("sticky")
} else {
thbottomcontainerrightside.classList.remove("sticky");
}
}


//    let bottomcontainerrightside=document.getElementById("thbottomcontainerrightside")
//    bottomcontainerrightside.style.pos

    })
    console.log(result)
    package(result)
}
totalprice=0
let passdata=JSON.parse(localStorage.getItem("urbanCompany")) || []
let add=(el)=>{
    passdata.push(el)
localStorage.setItem("urbanCompany",JSON.stringify(passdata))
    alert(`added to the cart of ${el.name}`)
    totalprice+=el.price
    let thcost=document.getElementById("thcost")
    thcost.innerText= ` ₹ ${totalprice}`
    let thviewcart=document.getElementById("thviewcart")
    thviewcart.innerHTML=null
    let btnn=document.createElement("button")
    btnn.innerText="View Cart"
    btnn.setAttribute("id","thviewcartbtnn")
    btnn.addEventListener("click",function(){
        view()
    })
    thviewcart.append(btnn)
    


     
}
function view(){
    
    window.location.href="estimatebill_membership.html"
}

package(main)
var counter = 1;
setInterval(function(){
  document.getElementById('thradio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 2000);

let th_localstorage = document.getElementById('th_localstorage')
let th_l = JSON.parse(localStorage.getItem("location"))
th_localstorage.innerText = th_l