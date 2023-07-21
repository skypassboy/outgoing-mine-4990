
let transfer = document.getElementById('transfer_amount')
let getting_empty = document.querySelector('#payment_status_current')

getting_empty.style.display = "none"

let x = JSON.parse(localStorage.getItem("final_bill_urban"))
let h3 = document.createElement('h3')
h3.innerText = `Pay Amount: ${x}`
document.getElementById('payment').append(h3)
transfer.addEventListener('click', ()=>{
    let pay = document.getElementById('pay_amount').value
    
    
    let res = new Promise((resolve, reject)=>{
        
         if(pay==x){
        let payment_status_img = document.createElement('img')
        payment_status_img.src = "loading_img.gif"
        payment_status_img.setAttribute('id', "processing") 
        let msg = document.createElement('h4')
        msg.innerText ="Processing Your Payment"
        msg.setAttribute("id", "message_pay_status")
        let show_pay = document.querySelector('#payment_status_current')
        show_pay.append(payment_status_img, msg)
        show_pay.style.display="block"
       

        
            setTimeout(()=>{
                resolve("Yes")
                
            }, 5000)
           
         }else{
            reject("No")
         }
    })
    res.then((res)=>{
        console.log(res)
       let processing = document.getElementById('processing')
         processing.src="payment_success.gif"
         let msg = document.getElementById('message_pay_status')
         msg.innerText ="Payment Sucessful"

         let btn_div = document.createElement('div')
         btn_div.setAttribute('id', "after_success_div")
         let btn1 = document.createElement('button')
         btn1.innerText="View Details"
         btn1.setAttribute('class', "after_success")
         let btn2 = document.createElement('button')
         btn2.setAttribute('class', "after_success")
         btn2.innerText="Check Balance"
         btn_div.append(btn1, btn2)
        let process = document.querySelector('#payment_status_current')
        process.append(processing, msg, btn_div)
        process.style.display="block"
        
        document.getElementById('payment').innerHTML =null
    
        localStorage.setItem('urban_company_users', JSON.stringify([]))
     
        let show_Redirecting_message = document.getElementById('show_Redirecting_message')
        let success_msg =  document.createElement('h4')
        let count = 0
       let id = setInterval(()=>{
        count++
           success_msg.innerText = `Redirecting....to Home...${count}`
           show_Redirecting_message.append(success_msg)
           success_msg.style.textAlign='center'
           success_msg.style.color="green"
           if(count===5){
            clearInterval(id)
            window.location.href = '../index.html'
           }
       }, 1000)
        
    }).catch((err)=>{
        console.log(err)
        alert('Enter Amount or Empty value')
        let count = 0
        let text = 'error'
        showMessagePayment(text, count)
       
    })


})

function showMessagePayment(checkText, count){
    let process = document.getElementById('payment_status_current')
        let id =  setInterval(()=>{
            count++
         process.innerHTML = null
        let success = `<h2>Payment Successful... Redirecting to Home ${count}</h2>`
        let msg = document.createElement('h4')
        checkText=="error"?msg.innerHTML =`<h2 id=cancel_payment><span>!<span>Unable to Complete Your Payment... Redirecting to paymentSummary page..<span>${ count}</span></h2>`:success
        msg.setAttribute('id', "message_payment_fail")
        process.append(msg)
        if(count===5){
            clearInterval(id)
            window.location.href = '../estimatebill_membership.html'
        }
       }, 1000)
           
        
       
       
        process.style.display="block"
}
//input
//

