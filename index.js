var itemValue = document.getElementById('item-value');
var notification = document.getElementById('notification');
var cart = document.getElementById('cart');
notification.innerText = itemValue.value;
function increaseItemsValue(){
itemValue.value++;
notification.innerText = itemValue.value;
}
function decreaseItemsValue(){
    if(parseInt(itemValue.value) > 0){
    itemValue.value--;
}
else{
    alert('the value is not less than 0')
}
notification.innerText = itemValue.value
}

 function notificationList(){
    if(cart.classList.contains('d-none')){
        cart.classList.remove('d-none')
    }
    else{
        cart.classList.add('d-none')
    }
 }