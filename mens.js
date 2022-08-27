
    let mainarr=[
        {
            image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1660287057588-fcf0c3.jpeg",
            content:"Packages",

        },
        {
            image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189905841-237b37.png",
            content:"Massage Therapy",

        },
        {
            image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189857376-d49e47.png",  
            content:"Face Care",
        },
        {
            image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189957304-ea2a7b.png",
            content:"Shave/Beard Grooming"

        },
        {
            image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189933595-01692d.png",
            content:"Hair Color"

        },
        {
            image:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631190374864-78f3e8.jpeg",
            content:"Hair cut for mens"

        },
        

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
            name:"Haircut + Shave + Free 10 min head massage",
            rating:"★4.83(256k)",
            price:399,
            special:"Get Free",
            a:"Clean Shave /Moustanche Grooming",
            b:"Mens Haircut",
            c:"Packages"





        },
        {
            name:"Haircut + Beard Grooming + Free 10 mins head",
            rating:"★4.23(300k)",
            price:499,
            special:"Get Free",
            a:"Men's hair cut ",
            b:"Beard shape and style",
            c:"Packages"
        },
        {
            name:"Haircut + Massage",
            rating:"★4.83(222.3k)",
            price:599,
            special:"Get Free",
            a:"Men's haircut",
            b:"20Min's Head massage",
            c:"Packages"


        },
        {
            name:"Father and Kid's Haircut",
            rating:"★4.87(243.78k)",
            price:699,
            special:"Get Free",
            a:"10Min Head massage",
            b:"Men's haircut and kid's haircut ",
            c:"Packages"
            

        },
        {
            name:"Haircut + Face care",
            rating:"★4.87(243.78k)",
            price:655,
            special:'Get Free',
            a:"Face and Neck detan pack",
            b:"Men's Haircut",
            c:"Packages"
            


        },
        {
            name:"Haircut + Hair color",
            rating:"★4.87(243.78k)",
            price:699,
            special:'Get Free',
            a:"Men's Hair cut",
            b:"Garnier color naturals",
            c:"Packages"
            

        },
        {
            name:"Make your own package",
            rating:"★4.87(243.78k)",
            price:1999,
            special:'Get Free',
            a:"Haircut",
            b:"Full body massage",
            c:"Packages"


        },
    										

			{ name:"Haircut for Men",	
            rating:"★4.87 (456.8K)",	
            price:249,
            special:"30 mins View details",
            a:"",
            b:"",
            c:"Massage Therapy"
        },
        {
            name:"Haircut for 2",
            rating:	"★4.85 (18.1K)",
            price:499,
            special:"60 mins",
            a:"Pack of 2 Haircut for Men",
            b:"",
            c:"Massage Therapy"
            
           
        },
        { 
            	
         name:"FOR 3-12 YEARS BOYS	Kid's Hair Cut",
         rating:"★4.82 (83.5K)",
         price:	249,
        special:"30 mins View details",
        a:"No more hassle of managing kids outside",b: "safe haircut at home and Expert child stylists for a mess free experience with child friendly equipment",
        c:"Massage Therapy"
        },
        { 

      name:"Haircut + Beard Grooming + Massage",	
      rating:"★4.84 (212.9K)",
      price:549	,
      special:"1 hr 5 mins",		
      a:"Men's Haircut	10 min Head Massage	Add",
      b:"",
      c:"Massage Therapy"

        },
        {

      name:"Father & Kid's Haircut",	
      rating:"★4.83 (212K)",
      price:599,
    special:"1 hr 10 mins",
    a:"10 min Head Massage",
    b:"Kids Haircut (Boys)",
    c:"Massage Therapy"
        },
        { 
	name:"Hair Color with Product",
    rating:"★4.82(1.6K)" ,
    price:299,
    special:"20min",
    a:"Ammonia-free products for best results",
    b:"Top brands available - Garnier & L'Oreal",
    c:"Face Care"	
        },
        { 

 name:"COLOR PROVIDED BY USER	Hair Color - Application Only",
 	rating:"★4.80(18.6K)",
    price:199,
    special:"40 mins",		
    a:"Even application by professionals especially at the back	Complete coverage of grey hair from tip to root",
    b:"",
    c:"Face Care"
        },
        {	

name:"Clean Shave/Moustache Grooming",	
rating:"★4.83(56K)",
price:149,
special:"20 mins",
a:"",
b:"",
c:"Shave/Beard Grooming"
        },
    { 

name:"Beard Shaping & Styling",
rating:"★4.84(86.1K)",
price:199,
special:"25 mins",
a:"Get an even beard shape", 
b:"covering all hard to reach areas	Get customized styles from our professionally trained stylists",
c:"Shave/Beard Grooming"	
    },
    { 
name:"Beard Color with Product", 
rating:"★4.70(964)",	
price:199,
special:"30 mins",
a:"Colour patchy grey beards with a truly natural look",
b:"Best quality products to ensure a natural looking color",
c:"Shave/Beard Grooming"
    },
    { 
										
name:"Face & Neck De-Tan",
rating:"★4.79(22.2K)",
price:399,
special:"20min",
a:"",
b:"",
c:"Hair Color"
	},

{ 
name:"Instant Tan Reduction",
rating:"★4.77(5.8K)",
price:149,
special:"10 mins",
a:"Removes tan", 
b:"dust & dirt	Treats pigmentation marks on your face",
c:"Hair Color"
},
{ 

name:"NEW LAUNCH	Instant Oil Reduction",
rating:"★4.73(2K)",
price:149,
special:"10 mins",
a:"Removes excess oil deposits from skin & pores",
b:"Promotes refreshed & hydrated skin, prevents acne",
c:"Hair Color"
	},	
    { 

name:"Refreshing Face Massage",
rating:"★4.78(3.9K)",
price:149,
special:"10 mins",
a:"Improves blood circulation & reduces wrinkles",
b:"Moisturizes dry skin, instant freshness",
c:"Hair Color"
    },
    { 	
name:"FOR DRY SKIN	Anti-pollution Cleanup",	
rating:"★4.77(6K)",
price:699,
special:"35 mins",
a:"Activated charcoal absorb impurities, prevent skin damage",
b:"Cleanses excess oil for an energized skin",
c:"Hair Color"
    },
    { 
name:"Oil Reduction Cleanup",
rating:"★4.77(5.1K)" ,
price:699,
special:"35 mins",
a:"Hydrating antibacterial formula that cleanses dark spots	Powered by antioxidants and vitamins",
b:"",
c:"Hair Color"
    },
    { 
name:"Skin Brightening Facial",
rating:"★4.77(9.3K)",
price:1399,
special:"1 hr 5 mins",	
a:"Brightens skin & evens out skin tone also protects from sun exposure	Includes a deep face stress relief massage",
b:"",
c:"Hair Color"
    },
    { 
name:"Mulberry & Saffron Facial",
rating:"★4.78(4.2K)",
price:1399,
special:"1 hr 5 mins",
a:"Transforms  and restores dull and dead skin",
b:"Natural extracts give a boost of hydration",
c:"Hair Color"
    	},
        { 
									
name:"Relaxing Head Massage",
rating:"★4.83(95.8K)",
price:99,
special:"10min",
a:"",
b:"",
c:"Hair cut for mens"
        },
        { 
name:"WFH SPECIAL	Neck & Shoulder Massage",
rating:	"★4.78(7.5K)",
price:199,
special:"20 mins",
a:"Relaxing Neck",
b:"Shoulder Massage	Eases tense and sore muscles",
c:"Hair cut for mens"
        },
        {
name:"HAIRWASH NOT INCLUDED	Anti Dandruff - Head Massage",
rating:"★4.81(2.5K)",
price:149,
a:"Reduces dandruff, itchy and flaky scalp	Onion, curry leaf" ,
b:" neem oil that heal & prevent hair damage",
c:"Hair cut for mens"
        },
{

name:"Kid's Head Massage" ,
rating:"★4.87(283)",
price:149,
special:"40 mins",
a:"Relaxing",
b:"child friendly massage	Helps increase focus & concentration",
c:"Hair cut for mens"
},
{ 
name:"Head, Neck & Shoulder Massage",
rating:" ★ 4.77(6.1K)",
price:349,
special:"40 mins",
a:"Complete relaxation from exhaustion & work fatigue",
b:"Relieves knots, stiffness & muscle tension",
c:"Hair cut for mens"
}										
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
            let d=document.createElement("li")
            d.innerText=el.special
            d.style="color:gray"
            let d1=document.createElement("hr")

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
            let btn=document.createElement("button")
            btn.innerText="ADD"
            btn.setAttribute("class","thbtn")
            btn.addEventListener("click",function(){
                add(el)
            })
            div.append(a,b,c,d,e,f,d1)
            div2.append(btn)
            thbottomcontainerleftside.append(div,div2)



        })
        
    }
    let filtering=(h3)=>{
        console.log(h3)
        result=main.filter(function(el){
            // console.log(el)
            return el.c==h3


        })
        console.log(result)
        package(result)
    }
    totalprice=0
    let add=(el)=>{

        alert(`added to the cart of ${el.name}`)
        totalprice+=el.price
        let thcost=document.getElementById("thcost")
        thcost.innerText= ` ₹ ${totalprice}`
        let thviewcart=document.getElementById("thviewcart")
        thviewcart.innerHTML=null
        let btnn=document.createElement("button")
        btnn.innerText="View Cart"
        btnn.setAttribute("class","thviewcartbtnn")
        thviewcart.append(btnn)
        


         
    }
   
    package(main)

