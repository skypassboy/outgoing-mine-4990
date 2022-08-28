// https://github.com/skypassboy/outgoing-mine-4990
//accordian
let toggling = document.querySelector(".btn-toggle-show")
let inner_content = document.querySelector(".inner-content")

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let obj = {
  user_review: [
    { name: "Vishal tripathi", member_since: "Oct 2020", description: "Fully satisfied.. Saved 1200+ till now.. I will recommend this service app to my friends.", price: 1559, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519483435-dc165c.jpeg" },
    { name: "Stuti Gupta", member_since: "Jan 2020", description: "Strongly recommend getting their sub actually - one of the best value for money subscriptions.", price: 1375, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519485187-8e7028.jpeg" },
    { name: "Rohith Sundar", member_since: "Jul 2019", description: "Saved 300 in the 1st request. Everything after that is bonus.", price: 1737, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519486007-508d52.jpeg" },
    { name: "Ozair Hamdani", member_since: "Oct 2019", description: "Really satisfied with my UC plus membership. Booked five services till now and all were professionally efficient people and maintained a satisfactory result.", price: 1241, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519486558-840bab.jpeg" },
    { name: "Mayur Gupta", member_since: "Oct 2018", description: "I can book repair request for my parents house for free whenever I want. Refrigerator, RO, or washing machine repair. Super thanks UC Plus.", price: 1230, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519487057-e06c5b.jpeg" },
    { name: "Harshita Keswani", member_since: "May 2018", description: "The level of convenience it adds to life is just amazing. Love the service here in Bhubaneswar, whether it's plumber, electrician etc, I got the visit for free.", price: 1628, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519492148-943b5a.jpeg" },
    { name: "Harsh Singh", member_since: "Apr 2019", description: "I would definitely like to give 9/10. I must say that this is an amazing membership program. People can and should use it as per their requirements.", price: 1568, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519497247-78f8f3.jpeg" },
    { name: "Akashay Oulkar", member_since: "Jun 2019", description: "Got the membership for free during a sale and I have already saved more than 1500 rupees. What more can I ask for?.", price: 1652, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519497722-4b3d8d.jpeg" },
    { name: "Akhil Garg", member_since: "Jul 2018", description: "Best membership program ever! save on every request.", price: 1781, image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_48,dpr_1,fl_progressive:steep,q_auto/images/growth/customer-subscription/1628519498218-b3964f.jpeg" },
  ]
}
let load_more = document.getElementById('load_more_review')
load_more.addEventListener('click', () => {
  filterobj(obj)
})

function filterobj(obj) {
  append(obj.user_review)
  let load = document.getElementById('load_more_review')
  load.style.display = "none"
}
let arr = []
for (let i = 0; i < 2; i++) {
  arr.push(obj.user_review[i])
}
console.log(arr)
let append = (arr) => {
  arr.forEach(({ name, member_since, image, price, description }) => {


    let div = document.createElement('div')
    let div2_p = document.createElement('div')
    let div2_child1_p = document.createElement('div')
    let div2_child1 = document.createElement('div')
    let div2_child1_sub1 = document.createElement('div')
    let div2_child2 = document.createElement('div')
    let div2_child2_sub1 = document.createElement('div')
    let photo = document.createElement('img')

    let name1 = document.createElement('p')
    let member_since1 = document.createElement('p')
    let price1 = document.createElement('p')
    let price1_sub_des = document.createElement('p')
    let description1 = document.createElement('p')

    photo.src = image
    name1.innerText = name
    member_since1.innerText = `Member since ${member_since}`

    price1.innerHTML = `<img src="lp_img/plus_small.png" alt="plus small"><span>&#8377;</span>${price}`
    price1_sub_des.innerText = "in Plus Savings"

    description1.innerText = description

    div2_p.setAttribute('class', "review_parent")

    div2_child1_sub1.append(name1, member_since1)
    div2_child1.append(photo)
    div2_child1_p.append(div2_child1, div2_child1_sub1)


    div2_child2_sub1.append(price1, price1_sub_des)
    div2_child2.append(div2_child2_sub1)

    div2_p.append(div2_child1_p, div2_child2)
    div.append(div2_p, description1)
    let parent = document.getElementById("sub-child4")
    parent.append(div)
  })
}
append(arr)


//experience multiply price

let experience_price = document.querySelectorAll(".child2_P_div2>div")
let count = []
experience_price.forEach((el, i) => {
  if (i == 4) {
    el.classList.add("experience_multiply")
  }
  el.style.cursor = "pointer"
  // el.classList.remove("experience_multiply")

  el.addEventListener('click', () => {

    // console.log(el)
    if (el.classList.contains("experience_multiply")) {
      el.classList.remove("experience_multiply")
      console.log("yes")
    } else {
      // console.log(el.innerText)
      addingtoArray(el.innerText)

      el.classList.add("experience_multiply")
    }

  })
})
// console.log()

function addingtoArray(value) {
  let val = value

  // console.log(value)
  if (val !== undefined) {
    console.log(val)
    if (val == 2) {
      exp_price_accor.innerHTML = `<span>&#x20B9;</span>240`
    } else {
      exp_price_accor.innerHTML = `<span>&#x20B9;</span>${(val / 2) * 288}`
    }
  }
}
addtoLocalStorage()
function addtoLocalStorage() {

  localStorage.setItem("service", JSON.stringify(249))
  let total_price1 = document.getElementById('total_price')
  
  let data = JSON.parse(localStorage.getItem("urbanComapny")) || [] 
  let price = 0
  data.forEach((el)=>{
    price = price+=el.price
  })
  let for_6_months = document.getElementById('remove_add_6months')
  let total_amount = document.getElementById('total_amount')
  // let for12months = document.getElementById('remove_add_12months')
  let discount_coupne = document.querySelector('#total_price>#discount_coupne')

  price = price + 249

  total_amount.innerHTML = `<span>&#x20B9;</span>${price}`

  let for12months = document.getElementById('for12months')
  for_6_months.addEventListener('click', () => {



    total_price1.style.height = "100px"

    if (for_6_months.innerText == "Add" && for12months.innerText == "Remove") {
      for12months.innerText = "Add"
      price = price - 299
      price = price + 249
      total_amount.innerHTML = `<span>&#x20B9;</span>${price}`
      for_6_months.innerText = "Remove"

    } else {
      if (for_6_months.innerText == "Remove") {
        console.log("hellloch23")
        price = price - 249
        total_amount.innerHTML = `<span>&#x20B9;</span>${price}`
        for_6_months.innerText = "Add"
      } else {
        price = price + 249
        total_amount.innerHTML = `<span>&#x20B9;</span>${price}`
        for_6_months.innerText = "Remove"
      }
    }
    if (for12months.innerText == "Add" && for_6_months.innerText == "Add") {
      localStorage.setItem("service", JSON.stringify(0))
      discount_coupne.style.display = "none"
    } else {
      discount_coupne.style.display = "block"
      localStorage.setItem("service", JSON.stringify(249))
    }

  })
  // let text_12months = document.getElementById('text_12months')
  // discount_coupne
  // console.log("yes add this");
  for12months.addEventListener('click', () => {
    if (for12months.innerText == "Add" && for_6_months.innerText == "Add") {
      price = price + 299
      console.log(price);
      total_amount.innerHTML = `<span>&#x20B9;</span>${price}`
      for12months.innerText = "Remove"
      console.log(1 + "hai");

    } else if (for12months.innerText == "Add" && for_6_months.innerText == "Remove") {
      for_6_months.innerText = "Add"
      price = price - 249
      price = price + 299
      console.log(2 + "hai");
      total_amount.innerHTML = `<span>&#x20B9;</span>${price}`
      for12months.innerText = "Remove"
      console.log(price);
    } else if (for12months.innerText == "Remove" && for_6_months.innerText == "Add") {
      for12months.innerText = "Add"
      console.log(3 + "hai");
      console.log(price);
      price = price - 299
      total_amount.innerHTML = `<span>&#x20B9;</span>${price}`
    }
    if (for12months.innerText == "Add" && for_6_months.innerText == "Add") {
      localStorage.setItem("service", JSON.stringify(0))
      discount_coupne.style.display = "none"
    } else {
      discount_coupne.style.display = "block"
      localStorage.setItem("service", JSON.stringify(299))
    }
  })


  let prceed_payement = document.getElementById('proceed_pay')

  let nowAdd = () => {
    // console.log("kkya");
    localStorage.setItem("total_price", JSON.stringify(price))
    window.location.href = "\payment_summary.html"

  }
  prceed_payement.addEventListener('click', nowAdd)
}







  // console.log(count)
  // el.classList.remove("experience_multiply")


