$(document).ready(function() {
 $('#hijo').slideDown('slow');
},900);

$(document).ready(function() {
  $('.buttonadd').click(function() {
    $('input[type="text"]').val('1');
  });
});

$(document).ready(function() {
  $('#btnmod').click(function() {
    $('#container').slideUp('slow');
    

  });
});
$(document).ready(function() {
  $('#btn-success').click(function () {
  document.getElementById("cart").style.zIndex = 151;
  document.getElementById("container").style.zIndex = 11000;
   
  });
});
$(document).ready(function() {
                $('.num-in span').click(function () {
                    var $input = $(this).parents('.num-block').find('input.in-num');
                  if($(this).hasClass('minus')) {
                    var count = parseFloat($input.val()) - 1;
                    count = count < 1 ? 1 : count;
                    if (count < 2) {
                      $(this).addClass('dis');
                    }
                    else {
                      $(this).removeClass('dis');
                    }
                    $input.val(count);
                  }
                  else {
                    var count = parseFloat($input.val()) + 1
                    $input.val(count);
                    if (count > 1) {
                      $(this).parents('.num-block').find(('.minus')).removeClass('dis');
                    }
                  }
                  
                  $input.change();
                  return false;
                });
                
              });
  
              
              const addToshoppingBtn = document.querySelectorAll('.buttonadd');
            
              addToshoppingBtn.forEach(addtocardbtn => {
                addtocardbtn.addEventListener('click', addToCardClicked);
                
               });
              const comprarButton = document.querySelector('.comprarButton');
              comprarButton.addEventListener('click', comprarButtonClicked);
              comprarButton.style.display = "none";
              
              const ShopingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
              function addToCardClicked(event){

                const button = event.target;
                const item = button.closest('.flip-card');
                const itemTitle = item.querySelector('h1').textContent;
                const itemPrice = item.querySelector('h2').textContent;
                const itemCant = item.querySelector('.in-num').value;
                const itemImage = item.querySelector('img').src;
                const itemTime = item.querySelector('#time').textContent;
                

                addItemToShopCart(itemTitle, itemPrice, itemCant, itemImage, itemTime);
               
              }

              function addItemToShopCart(itemTitle, itemPrice, itemCant, itemImage, itemTime){

                const elemetsTitle = ShopingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
                for(let i = 0; i < elemetsTitle.length; i++){
                  if(elemetsTitle[i].innerText === itemTitle){
                    let elementQuantity = elemetsTitle[
                      i
                    ].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
                    
                    alert("Debe revisar el carro PENDEJO!!!");
                    elementQuantity.value++;
                    updateShoppingCartTotal();
                  return;
                  }
                }

                const ShopingCartRown = document.createElement('div');
                const ShopingCartContent = `
                <div class="row shoppingCartItem " id="td">
                <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3 ">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0" style="font-size: 10px;" >${itemTitle}</h6>
                </div>
                </div>
                <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3 ">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                </div>
                </div>
                <div class="col-4">
                <div class="shopping-cart-quantity d-flex align-items-center h-100 border-bottom pb-2 pt-3 ">
                <p class="item-price mb-0 shoppingCartItemQuantity" style="position: absolute; 
                right: 83px; 
                bottom: 25px;">${itemCant}</p>
                <p class="item-price mb-0 shoppingCartItemTime" style="position: absolute; 
                display:none;
                right: 25px; 
                bottom: 25px;">${itemTime}</p>
                <button class="btn btn-danger buttonDelete" type="button" 
                style=" 
                background: transparent;
                min-width: 29px;
                max-width: 39px;
                border-radius: 20px;
                position:absolute;
                top:15px;
                right: 10px;
                ">X</button>
                </div>
                </div>
                </div>`;
                ShopingCartRown.innerHTML = ShopingCartContent;
                ShopingCartItemsContainer.append(ShopingCartRown);

                ShopingCartRown.querySelector('.buttonDelete').addEventListener('click',removeShoppingCartItem);
                updateShoppingCartTotal();
              }

              function updateShoppingCartTotal(){
                let total = 0;
                const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

                const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

                shoppingCartItems.forEach((shoppingCartItem) => {
                 
                  const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
                  const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
                  const shoppingCartItemQuantityElement =  shoppingCartItem.querySelector('.shoppingCartItemQuantity');
                  const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.textContent);

                  document.getElementById('totalItems').innerHTML = Number(shoppingCartItems.length);
                  total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
                  comprarButton.style.display = "block";
                  document.getElementById("totalItems").animate([
                    {transform: 'scale(1.5)'},
                    // keyframes
                    { filter: 'drop-shadow(5px 5px 5px #c32aa3)' }
                    
                  ], {
                    // timing options
                    duration: 1000,
                    iterations: 1
                  });
                });
                
                shoppingCartTotal.innerHTML = " $ " + `${total}`;
              
              
              }
              function removeShoppingCartItem(event){
                var n = 1;
                const buttonClicked  = event.target;
                buttonClicked.closest('.shoppingCartItem').remove();
                document.getElementById('totalItems').innerHTML = n-1;
                
                updateShoppingCartTotal();
                document.getElementById("totalItems").animate([
                  // keyframes
                  { transform: 'translateY(15px)'}
                ], {
                  // timing options
                  duration: 1000,
                  iterations: 1
                });
              }
                function comprarButtonClicked() {
                  let total = 0;
                  let time = 0;
                  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
                  
  
                  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
                  shoppingCartItems.forEach((shoppingCartItem) => {
                    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
                    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
                    const shoppingCartItemQuantityElement =  shoppingCartItem.querySelector('.shoppingCartItemQuantity');
                    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.textContent);
                    const shoppingCartItemTimeElement =  shoppingCartItem.querySelector('.shoppingCartItemTime');
                    const shoppingCartItemTime = Number(shoppingCartItemTimeElement.textContent.replace("'", ''));
                    time = time +((shoppingCartItemTime*shoppingCartItems.length)/shoppingCartItems.length);
                    
                    document.getElementById('C').innerHTML = time + " Minutos ";
                    document.getElementById('totalItems').innerHTML = Number(shoppingCartItems.length);
                    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
                    document.getElementById("T").innerHTML =  shoppingCartTotal.innerHTML = " $ " + `${total}`;
                    
                    var inicioConteo,
                    idTimeout,
                    cronometro = document.querySelector('#cronometro'),
                    botonReiniciar = document.querySelector('#btnmod');
                    
                    function zeroIzq(n){
                        return n.toString().replace(/^(\d)$/,'0$1');
                    }
                
                    function formatoSegundos(s){
                        return zeroIzq(Math.floor(s / 3600))+':'+zeroIzq(Math.floor(s%3600 / 60))+':'+zeroIzq(Math.floor((s%3600)%60));
                    }
                    
                    function actualizar(){
                      var modal = document.getElementById("tvesModal");
                      var body = document.getElementsByTagName("body")[0];
                      var z = document.getElementById("cronometro");
                      
                      
                        var dif = Date.now() - inicioConteo;
                        dif = Math.round(dif / 1000);
                        cronometro.innerHTML = formatoSegundos(dif);
                        idTimeout = setTimeout(actualizar,1000);
                        var modal = document.getElementById("tvesModal");
                      var body = document.getElementsByTagName("body")[0];
                      var z = document.getElementById("cronometro");
                      var audio = document.getElementById("audio");


                      z.style.display = "block";
      /* ¬¶¬ Cambiar a Minutos, ya que esta en segundos. ¬¶¬*/
                      if(cronometro.innerHTML == "00:00:"+ time){
                        audio.play();
                        z.style.display = "none";
                        modal.style.display = "block";
                        body.style.position = "static";
                        body.style.height = "100%";
                        body.style.overflow = "hidden";
                        clearTimeout(idTimeout);
                            inicioConteo = Date.now();
                        window.onclick = function(event) {
                          if (event.target == modal) {
                            modal.style.display = "none";
                            body.style.position = "inherit";
                            body.style.height = "auto";
                            body.style.overflow = "visible";
                            clearTimeout(idTimeout);
                            inicioConteo = Date.now();
                          }
                        }  
                        
                      }
                       
                    }
                
                    function iniciar(){
                      var z = document.getElementById("cronometro");
                      z.style.display = "block";
                        clearTimeout(idTimeout);
                        inicioConteo = Date.now();
                        actualizar();
                    }
                
                    botonReiniciar.onclick = function(){
                        iniciar();
                        
                      
                      }
                     
                
                      
                      
                    
                  });
                  
                  /*EFECTO PARA PEDIDO */
                  /*const $vibration = document.getElementById('comprarModal');
                  // element.animate(keyframes = [], option = {})
                  const animation = $vibration.animate([
                    {
                      transform: 'rotate(0)',
                      transform: 'rotate(10deg)'
                    },
                    {
                      transform: 'rotate(0)',
                      transform: 'rotate(-10deg)'
                    }
                  ],{
                    duration: 1000,
                    delay: 200,
                    direction: 'alternate-reverse',
                    easing: 'cubic-bezier(0.42,0.50,0.58,1)',
                    iterations: Infinity,
                    fill: 'forwards',
                    interationStart: .1, //50%
                    // endDelay 5000, 
                  })*/
                
                  document.getElementById('totalItems').innerHTML = 0;
                  ShopingCartItemsContainer.innerHTML = '';
                  updateShoppingCartTotal();
                  comprarButton.style.display = "none"; 

              }

              function myFunctio() {
                                            
                var modal = document.getElementById("tvesModal");
               if( modal.style.display = "block")
                {
                    $('#tvesModal').slideUp('slow');
                   
                }
               
                }
                $(document).ready(function() {
                  $('#close').click(function () {
                    $('.Calif-content').slideDown('slow'); 
                   
                  });
                });

                $(document).ready(function() {
                  $('#Faic').click(function () {
                   
                    $('.Calif-content').slideUp('slow')
                    var bool=confirm("Gracias Por Calificar Nuestro Servicio"+"\n\nTe esperamos Pronto ☻☻☻☻☻");
                    if(bool){
                      window.location.reload();
                    }else{
                      window.location.reload();
                    }
                   
                  });
                });
                $('.close').click(function() {
                  window.location.reload();
              }); 
              
             
              
              