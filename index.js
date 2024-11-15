var itemValue = document.getElementById('item-value');
var notification = document.getElementById('notification');
var cart = document.getElementById('cart');
notification.innerText = itemValue.value;
var pappupImage = document.querySelectorAll('.thumbnail-image');
var minItems2 = document.getElementById('min-product2');
var minItems = document.getElementById('min-item');
var currentIndex = 0; // Keeps track of the current image index
imageIndex();
ecormance();
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
    var showOverlayColor = document.getElementsByClassName('overlay-color')[0];
    
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
    currentIndex = (currentIndex - 1 + pappupImage.length) % pappupImage.length;
    var previousImage = document.getElementById(`p-e-${currentIndex}`);
        minItems.src = previousImage.currentSrc;
}
