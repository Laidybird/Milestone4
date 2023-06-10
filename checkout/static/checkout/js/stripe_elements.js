var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);
var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();
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
var card = elements.create('card', {style: style});
card.mount('#card-element');

card.addEventListener('change', function(event) {
    var cardErrors = document.getElementById('card-errors');
    if (event.error) {
      cardErrors.textContent = event.error.message;
    } else {
      cardErrors.textContent = '';
    }
  });

    // Create a payment method using the card element
    stripe.createPaymentMethod('card', card)
      .then(function(result) {
        if (result.error) {
          // Display error message if there is an issue with the card
          var cardErrors = document.getElementById('card-errors');
          cardErrors.textContent = result.error.message;
  
          // Re-enable the submit button
          document.getElementById('submit').disabled = false;
        } else {
          // Process the payment using the obtained payment method
          var paymentMethodId = result.paymentMethod.id;
          // Submit the form or send the payment method ID to your server for further processing
          // ...
        }
      });
// Handle form submit
var form = document.getElementById('payment-form');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    card.update({ 'disabled': true});
    $('#submit-button').attr('disabled', true);
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
        }
    }).then(function(result) {
        if (result.error) {
            var errorDiv = document.getElementById('card-errors');
            var html = `
                <span class="icon" role="alert">
                <i class="fas fa-times"></i>
                </span>
                <span>${result.error.message}</span>`;
            $(errorDiv).html(html);
            card.update({ 'disabled': false});
            $('#submit-button').attr('disabled', false);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                form.submit();
            }
        }
    });
});
