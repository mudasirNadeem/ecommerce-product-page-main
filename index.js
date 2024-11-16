var itemValue = document.getElementById('item-value');
var itemsQuantity = document.getElementById('qunatity')
var notification = document.getElementById('notification');
var cart = document.getElementById('cart');
notification.innerText = itemValue.value;
var pappupImage = document.querySelectorAll('.thumbnail-image');
var minItems2 = document.getElementById('min-product2');
var minItems = document.getElementById('min-item');
var cartNoData = document.getElementById('cart-no-data');
var currentIndex = 0; // Keeps track of the current image index
var showOverlayColor = document.getElementsByClassName('overlay-color')[0];
var deleteItems = document.getElementById('delete-Items');
var items = document.getElementById('items');
var noItems = document.getElementById('noItems');
imageIndex();
ecormance();
function increaseItemsValue(){
itemValue.value++;
}
function decreaseItemsValue(){
    if(parseInt(itemValue.value) > 0){
    itemValue.value--;
}
else{
    alert('the value is not less than 0')
}
}
function cartValue(){
    notification.innerText = itemValue.value;
    if(items.classList.contains('d-none')){
        items.classList.remove('d-none');
    }
}
 function notificationList(){
    var cartTotal = document.getElementById('cart-total');
     if(parseInt(notification.innerText)){
        itemsQuantity.innerText =  notification.innerText;
        var totalRupes = parseInt(125 * itemsQuantity.innerText);
        cartTotal.innerText =  totalRupes + ".00";
        if(cart.classList.contains('d-none')){
            cart.classList.remove('d-none');
            showOverlayColor.classList.remove('d-none');
            noItems.classList.add('d-none');

        }
        else{
            cart.classList.add('d-none');
            showOverlayColor.classList.add('d-none');
        }
    }
    else{
        cart.classList.add('d-none');
        if(cartNoData.classList.contains('d-none')){
            if(showOverlayColor.classList.contains('d-none')){
                showOverlayColor.classList.remove('d-none');
                cartNoData.classList.remove('d-none');
            }
            else{
                cartNoData.classList.add('d-none');
                showOverlayColor.classList.add('d-none');
            }
        }
        else{
            cartNoData.classList.add('d-none');
            showOverlayColor.classList.add('d-none');
        }
    }
 }
 
function imageIndex(){
    var getImage = document.querySelectorAll('.thumbnail-img');
    var index = 0;
    
    getImage.forEach(item => {
        var idIndex = index;
        index++;
        item.setAttribute('id', idIndex); 
        item.addEventListener('click', function() {
            imagePapop(idIndex);
        });
    });
}

function imagePapop(id) {
    var getID = document.getElementById(id);
    var showOverlay = document.getElementsByClassName('overlay')[0];
    showOverlayColor.addEventListener('click' , function(){
        showOverlay.classList.add('d-none');
        showOverlayColor.classList.add('d-none');
    });
  
    if(showOverlay.classList.contains('d-none')){
        showOverlay.classList.remove('d-none');
        showOverlayColor.classList.remove('d-none');
        minItems.src = getID.currentSrc;
        minItems2.src = getID.currentSrc;
    }
    
}
function ecormance(){
var index = 0;
pappupImage.forEach(items =>{
    var idIndex = index;
    index++;
    items.setAttribute('id', `p-e-${idIndex}`);
    items.addEventListener('click' , function(){
        itemsFun(idIndex);
    });
   
});
}
function itemsFun(idIndex){
    var pEIndex = document.getElementById(idIndex);
    minItems.src = pEIndex.currentSrc;
}
function next() {
    //   currentIndex = (currentIndex + 1) % pappupImage.length;
    if(currentIndex == pappupImage.length -1 ){
        currentIndex = 0;
        var nextImage = document.getElementById(`p-e-${currentIndex}` );
        minItems.src = nextImage.currentSrc;
    }
    else{
        currentIndex = (currentIndex + 1);
        var nextImage = document.getElementById(`p-e-${currentIndex}` );
        minItems.src = nextImage.currentSrc;
    }
}
function previous(){
    // currentIndex = (currentIndex - 1 + pappupImage.length) % pappupImage.length;
    if(currentIndex == 0 ){
        currentIndex = pappupImage.length -1;
            var previousImage = document.getElementById(`p-e-${currentIndex}`);
            minItems.src = previousImage.currentSrc;
    }
    else{
        currentIndex = (currentIndex - 1);
        var previousImage = document.getElementById(`p-e-${currentIndex}`);
        minItems.src = previousImage.currentSrc; 
    }
}
function handleDeleteItems() {
    items.classList.add('d-none');
    noItems.classList.remove('d-none');
    notification.innerText = "0"
}
