
  function hider(channel,no) {
  
    if(channel==1)
   {

    var x = document.getElementById('donation1')
    var y = document.getElementById('regular1');
    if(x.className === 'hide')
    {
    if(no==1)
    {
     y.className = 'hide';	
    
    x.className = 'appear'; 
    }
   
   	}
   	if(y.className === 'hide')
   	{
    if(no==2)
    { 
    y.className = 'appear';  
	x.className = 'hide';  
 	
    }
   	}

}
 if(channel==2)
   {

    var x = document.getElementById('donation2')
    var y = document.getElementById('regular2');
    if(x.className === 'hide')
    {
    if(no==1)
    {
      y.className = 'hide'; 
    
    x.className = 'appear'; 
    }
   
   	}
   	if(y.className === 'hide')
   	{
    if(no==2)
    { 
   y.className = 'appear';  
  x.className = 'hide';  
  
 	
    }
   	}

}}


  
  
  var handler = StripeCheckout.configure({
    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    token: function (token) {
        $("#stripeToken").val(token.id);
        $("#stripeEmail").val(token.email);
        $("#amount").val($("#amount").val() * 100);
        $("#myForm").submit();
    }
});

$('#customButton').on('click', function (e) {
    var amount = $("#amount").val() * 100;
    var displayAmount = parseFloat(Math.floor($("#amount").val() * 100) / 100).toFixed(2);
    // Open Checkout with further options
    handler.open({
        name: 'Demo Site',
        description: 'Custom amount ($' + displayAmount + ')',
        amount: amount
    });
    e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function () {
    handler.close();
});
var handler = StripeCheckout.configure({
    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    token: function (token) {
        $("#stripeTokene").val(token.id);
        $("#stripeEmaile").val(token.email);
        $("#amounte").val($("#amount").val() * 100);
        $("#myForme").submit();
    }
});

$('#customButtone').on('click', function (e) {
    var amount = $("#amounte").val() * 100;
    var displayAmount = parseFloat(Math.floor($("#amounte").val() * 100) / 100).toFixed(2);
    // Open Checkout with further options
    handler.open({
        name: 'Demo Site',
        description: 'Custom amount ($' + displayAmount + ')',
        amount: amount
    });
    e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function () {
    handler.close();
});