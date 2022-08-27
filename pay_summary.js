
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