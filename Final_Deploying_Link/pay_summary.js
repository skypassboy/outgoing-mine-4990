
function createDiv(des, amount){
    let div = createD()
    let item_total_p1 = createP()
    let item_p2 = createP()
    item_total_p1.setAttribute('class', "amount_descr")
    item_p2.setAttribute('class', "amount_all_type")
    item_total_p1.innerText = des
    item_p2.innerHTML = `<span>&#x20B9;</span>${amount}`
    div.append(item_total_p1, item_p2)  
    return div
}
function createP(){
    return document.createElement('p')
}
function createD(){
    return document.createElement('div')
}
let total_save = 106+98
// ============================================returning div and p=======
let append_payment = ()=>{
    let net_total = 0
    let fix_discount = 106+98
    let data = JSON.parse(localStorage.getItem("urbanCompany")) || [] 
    let service = JSON.parse(localStorage.getItem("service"))
  
data.forEach((el)=>{
    net_total+=el.price
})
    
    

     

    let div = createDiv("Item total", net_total)
    let convenience = createDiv('Convenience fees', 49)
    let instant_discount = createDiv('Instant Discount', -98) 
    document.getElementById('payment_detail').append(div, convenience)
   
let months_near_btn = document.getElementById('months_near_btn')
if(service=="249"){
    months_near_btn.innerText = "6 months"
}else if(service=="299"){
    months_near_btn.innerText = "12 months"
}else{
    months_near_btn.innerText = "0"
}


//total saving..........
let total_saving = document.getElementById('total_saving')
let order_saving = document.getElementById('order_saving')
total_saving.innerHTML = `<i class="fa fa-tag fa-lg"></i> Yay! you saved <span>&#x20B9;</span>${service===0?0:total_save} on final bill`
order_saving.innerHTML = `<i class="fa fa-tag fa-lg"></i> You are saving total<span> &#x20B9;</span>${service===0?0:total_save} on this order`


//final bill.............   

let final_bill = service!==""?Math.abs((net_total+49+service)-fix_discount):Math.abs(net_total+49)


if(net_total===0 && service===0){
    final_bill = 0
   window.location.href = "index.html"
}

let sum_total_p = document.getElementById('sum_total')
// final_bill = final_bill
sum_total_p.innerText = final_bill
  
localStorage.setItem("finalBill", JSON.stringify(final_bill))
let remove_sub_12 = document.getElementById('remove_12months') 
remove_sub_12.style.cursor = "pointer"


//================================================appending to payemnt summary==========
let membership_fees = createDiv('Membership fees', service)

let discount_saving = createDiv('Membership Discount', -106)
discount_saving.style.color="green"

document.getElementById('payment_detail').append(membership_fees, discount_saving, instant_discount)

let membership_duration =  document.getElementById('membership_duration')
membership_duration.innerHTML = `<span>&#x20B9;</span>${service}`


remove_sub_12.addEventListener('click', ()=>{
   
    if(remove_sub_12.innerText=="Remove"){
      
        fix_discount = Math.abs( service - fix_discount)
        let x = final_bill- fix_discount
    
        sum_total_p.innerText=x
        fix_discount = 106+98
        service = service
        remove_sub_12.innerText="Add"
       let py =  document.getElementsByClassName('amount_all_type')
       let amount_descr =  document.getElementsByClassName('amount_descr')
        for(let i=0;i<py.length;i++){
            
           if(i==2){
        
            py[i].parentElement.remove()
         }
         if(i==2){
           
            py[i].parentElement.remove()
         } 
          
          if(amount_descr[i].innerText=="Instant Discount"){
            py[i].parentElement.remove()
            localStorage.setItem('service', JSON.stringify(0))
          }
        }
       
    }else if(remove_sub_12.innerText=="Add"){
        sum_total_p.innerText=final_bill
        document.getElementById('payment_detail').append(membership_fees, discount_saving, instant_discount)
        remove_sub_12.innerText="Remove"
    }
       
}) 
}  
    
    
    
    
append_payment()
   
         


let data = JSON.parse(localStorage.getItem("urbanCompany")) || [] 

 
let itemsAppend = (data)=>{
    let count = 1 
  
  data.forEach((el, index) =>{

    let re_add_remove  = document.getElementById('item_add')
    
    let main_div = document.createElement('div')
    let div_child = document.createElement('div')
    let p_outer = document.createElement('p')
    let p_outer2= document.createElement('p')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3= document.createElement('p')
    
    p1.innerText = "-"
    p2.innerText = "1"
    p3.innerText = "+"

    p1.setAttribute("id", "minus")
    p2.setAttribute("id", "counting")
    p3.setAttribute("id", "plus_count")
    
    
    p1.addEventListener('click', ()=>{
        
      let minus_count =   document.getElementById('minus').innerText
    
       
           count--
          document.getElementById('counting').innerText = count
        p2.innerText = count
        //   priceing =  priceing * count
        if(count<1){
            
            let data1 = JSON.parse(localStorage.getItem("urbanCompany")) || [] 
            data1.splice(index, 1)
            localStorage.setItem("urbanCompany", JSON.stringify(data1))
            // window.location.href = "\estimatebill&membership.html"
            window.location.reload()
            if(data1.length==0)(
                window.location.href = "\estimatebill&membership.html"
            )
        } 
        let pr;
        p2.innerText = count
        pr = +p_outer2.innerText - el.price
        p_outer2.innerText = pr
        let sum_total_p1 = document.getElementById('sum_total')
        let sum2 = +sum_total_p1.innerText
          
        sum_total_p1.innerText = sum2-el.price
        sum_total_p1.style.color = "blue"
      
        // let pay_detail = document.getElementsByClassName('amount_all_type')
    }) 
    
       
    



      
  p3.addEventListener('click', ()=>{
    let plus_count =   document.getElementById('plus_count').innerText
    count++
 
   
        
        // document.getElementById('counting').innerText = count
        let pr;
        p2.innerText = count
        pr = +p_outer2.innerText + el.price
        p_outer2.innerText = pr
        // let pay_detail = document.getElementsByClassName('amount_all_type')
       

        let sum_total_p1 = document.getElementById('sum_total')
        let sum2 = +sum_total_p1.innerText
          
        sum_total_p1.innerText = sum2+el.price
        sum_total_p1.style.color = "blue"
  })
    
    
    p_outer.innerText = `${el.name} ${el.special}`
    p_outer2.innerText = el.price
    div_child.append(p1, p2, p3)
    div_child.setAttribute("id", "incre_decre_count")
    main_div.append(p_outer, div_child, p_outer2)
    re_add_remove.append(main_div)
});
 }

 itemsAppend(data)       
                
let x = "Home"
 let home_address = document.getElementById("home_address")
 let other_address = document.getElementById("other_address")
 
 home_address.addEventListener('click', ()=>{
    x = home_address.innerText
    other_address.classList.remove("address_active")
    home_address.classList.add("address_active")
   
 })
 other_address.addEventListener('click', ()=>{
     x = other_address.innerText
     home_address.classList.remove("address_active")
     other_address.classList.add("address_active")
 
})
   
    

 
 let getAddress = ()=>{
    
   let address_input =  document.getElementById("address_input").value
 let landmark_input = document.getElementById("landmark_input").value
 
 
  if(address_input!=="" && landmark_input!==""){
    let obj = {
        address:address_input,
        landmark:landmark_input,
        address_type:x,
        place:"Delhi"
    }
    localStorage.setItem("address", JSON.stringify(obj))
    return true
  
  }else{
    alert('Please fill the Address')
  }
 }       
 
 
let city = JSON.parse(localStorage.getItem("location"))
let l_map_city = document.getElementById("location_map_head")
l_map_city.innerText = city
 let map = ()=>{
    let other = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let iframe = document.getElementById("gmap_canvas")
    iframe.src =other
   
 } 
 map()
//  let login =JSON.parse(localStorage.getItem("login"))
    // let login = true
    multiMode()
function multiMode(){
    let login_user =  JSON.parse(localStorage.getItem("urban_company_login")) || {}
   let login =  login_user.login
  let show_message = document.getElementById('show_message')
   let multi = document.getElementById("multi_mode_verify") 
   if(login){
    multi.textContent  = "Proceed To Checkout"
   }else{
    multi.textContent  = "Login/Signup to Proceed"
   }
   multi.addEventListener('click', ()=>{
      multi.style.backgroundColor ="#cac6d4"
    if(multi.innerText=="Proceed To Checkout"){
        if(login){
            setTimeout(()=>{
                 
                   let modal_address = document.getElementById("modal_address") 
                   modal_address.style.display="flex"
                   multi.style.display="none"
                   let submit_address = document.getElementById("submit_address") 
                  
                   submit_address.addEventListener('click', ()=>{
                       let ch =  getAddress()
                       if(ch==true){
                           modal_address.parentNode.removeChild(modal_address)
                          
                           let book_slots_div = document.getElementById("book_slots_div") 
                           book_slots_div.style.display="block"
                        }
                        // modal_address
                    })
                }, 2000)
            }
    }else{
         alert('Please First Login')
         let message =  document.createElement('p')
         show_message.style.display='flex' 
       
         let count = 0
        let id =  setInterval(()=>{
            count++
            message.textContent = `Redirecting to Home page... ${ count}`
            show_message.append(message)
            if(count===5){
                clearInterval(id)
                window.location.href = "index.html"
             }
         }, 1000)
       
 

    }

}) 
}
//function to show message
function showMessage(){

}            

//  getting address from local storage the item

let appendUserData = ()=>{
    let u = JSON.parse(localStorage.getItem("address"))
   
    let div = document.createElement('div')
    let symbol_home = document.createElement('i')
    let p_heading = document.createElement('p')
    let data_add = document.createElement('p')
    
    div.setAttribute('class', "address_u_div")
    symbol_home.setAttribute("class", "fa fa-home")
    p_heading.innerText = u.address_type
    let rn = JSON.parse(localStorage.getItem("location"))
    data_add.innerText = `${u.address} ${u.landmark} ${rn}`
    div.append(symbol_home, p_heading, data_add)
   let u_address = document.getElementById('append_address_u') 
   u_address.append(div)  
}

appendUserData()
getSlots()
function getSlots(){
    let slot = []
    let slot_time =  document.querySelectorAll('#slot_time>p')
    
    for(let i=0;i<slot_time.length;i++)
    {
        slot_time[i].addEventListener('click', ()=>{
           slot.push(slot_time[i].innerText)
           
        })
    }
let data_slots =  document.getElementById('data_slots') 
data_slots.addEventListener('click', ()=>{
    let data_slot_p =  document.querySelectorAll('#data_slots>div>p')   
    let data_slot_h3 =  document.querySelectorAll('#data_slots>div>h3')   
    for(let i=0;i<data_slot_p.length;i++)
    {
        
       
            
           
        
        data_slot_h3[i].addEventListener('click', ()=>{
            
            // data_slot_h3[i].style.backgroundColor="blue" 
            let s_date = data_slot_h3[i].innerText
            let s_weekday = data_slot_p[i].innerText
            slot.push(s_date, s_weekday)
          
 
            localStorage.setItem("slots", JSON.stringify(slot))
        })
    }
})
let proceed_checkout =  document.getElementById('proceed_checkout')    

proceed_checkout.addEventListener('click', ()=>{
    
    let book_slots_div =  document.getElementById('book_slots_div')    
      
     appendSlotAndTime()  
     book_slots_div.parentNode.removeChild(book_slots_div)
     
     let bill_pay_div =  document.getElementById('bill_pay_div')
     bill_pay_div.style.display="block"
     let finalBill = JSON.parse(localStorage.getItem("finalBill"))
    //  finalBill
    let amount_finally =  document.getElementById('amount_finally')
    amount_finally.innerHTML = `<span>&#x20B9;</span>${finalBill}`
    amount_finally.addEventListener('click', ()=>{
        localStorage.setItem("final_bill_urban", JSON.stringify(finalBill))
         window.location.href ="phonepay/payment.html"
    })
    
    // window.location.href=""
})

}
function appendSlotAndTime(){
   let time_date= JSON.parse(localStorage.getItem("slots"))
   console.log(time_date[0])
   let div = document.createElement('div')
   let p1 = document.createElement('p')
   let p2 = document.createElement('p')
   let p3 = document.createElement('p')
   let p4 = document.createElement('p')

   p1.innerText = "Booked Slot:"
   p2.innerText =  time_date[0]
   p3.innerText =  `Aug${time_date[1]}`
   p4.innerText =  `Weekday ${time_date[2]}`
div.append(p1, p2, p3, p4)
document.getElementById('slot_info_pay').append(div)    

}
   
   

   
