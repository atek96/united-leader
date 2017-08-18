var cart = {
  cart: [],
  dobavit_v_korzinu: function(novyi_tovar)
            {
              localStorage.set = x;
            },
  udalit_iz_korziny: function(id)
            {
              alert(this.cart);
            }
}

function aaa() {
  alert("hello");
}

var bbb = "hi";

var birdeme = {kaka:bbb,
                baba:function(){
                  return this.kaka
                },
                izmenit:function(){
                  this.kaka='ya novaya peremenka'
                }};

alert(birdeme.baba());
birdeme.izmenit();
alert(birdeme.baba());

aaa();

//alert(cart.cart.length);
