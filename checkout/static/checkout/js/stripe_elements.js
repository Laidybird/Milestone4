var stripePublicKey = $('#id_stripe_public_key').text();
var clientSecret = $('#id_client_secret').text();
var stripe = Stripe(stripePublicKey);
var elements = stripe.elements();

// Create a style object for the card element
var style = {
  base: {
    color: '#000',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#dc3545',
    iconColor: '#dc3545'
  }
};

// Create a card element
var card = elements.create('card', { style: style });

// Mount the card element to the container with ID "card-element"
card.mount('#card-element');

// Handle card validation errors
card.addEventListener('change', function(event) {
  var cardErrors = document.getElementById('card-errors');
  if (event.error) {
    cardErrors.textContent = event.error.message;
  } else {
    cardErrors.textContent = '';
  }
});

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Disable the submit button
  document.getElementById('submit-button').disabled = true;

  // Create a payment method using the card element
  stripe.createPaymentMethod({
    type: 'card',
    card: card
  }).then(function(result) {
    if (result.error) {
      // Display an error message
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;

      // Enable the submit button
      document.getElementById('submit-button').disabled = false;
    } else {
      // Payment method created successfully, proceed with payment confirmation
      stripe.confirmCardPayment(clientSecret, {
        payment_method: result.paymentMethod.id
      }).then(function(confirmResult) {
        if (confirmResult.error) {
          // Payment confirmation failed, display an error message
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = confirmResult.error.message;

          // Enable the submit button
          document.getElementById('submit-button').disabled = false;
        } else {
          // Payment confirmation succeeded, submit the form
          form.submit();
        }
      });
    }
  });
});