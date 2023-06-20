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
  card.update({ 'disabled': true});
    $('#submit-button').attr('disabled', true);
    $('#payment-form').fadeToggle(100);
    $('#loading-overlay').fadeToggle(100);

    var saveInfo = Boolean($('#id-save-info').attr('checked'));
    // From using {% csrf_token %} in the form
    var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();
    var postData = {
        'csrfmiddlewaretoken': csrfToken,
        'client_secret': clientSecret,
        'save_info': saveInfo,
    };
    var url = '/checkout/cache_checkout_data/';

    $.post(url, postData).done(function () {
        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: $.trim(form.full_name.value),
                    phone: $.trim(form.phone_number.value),
                    email: $.trim(form.email.value),
                    address:{
                        line1: $.trim(form.street_address1.value),
                        line2: $.trim(form.street_address2.value),
                        city: $.trim(form.town_or_city.value),
                        country: $.trim(form.country.value),
                        state: $.trim(form.county.value),
                    }
                }
            },
            shipping: {
                name: $.trim(form.full_name.value),
                phone: $.trim(form.phone_number.value),
                address: {
                    line1: $.trim(form.street_address1.value),
                    line2: $.trim(form.street_address2.value),
                    city: $.trim(form.town_or_city.value),
                    country: $.trim(form.country.value),
                    postal_code: $.trim(form.postcode.value),
                    state: $.trim(form.county.value),
                }
            },
        }).then(function(result) {
            if (result.error) {
                var errorDiv = document.getElementById('card-errors');
                var html = `
                    <span class="icon" role="alert">
                    <i class="fas fa-times"></i>
                    </span>
                    <span>${result.error.message}</span>`;
                $(errorDiv).html(html);
                $('#payment-form').fadeToggle(100);
                $('#loading-overlay').fadeToggle(100);
                card.update({ 'disabled': false});
                $('#submit-button').attr('disabled', false);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    form.submit();
                }
            }
        });
    }).fail(function () {
        // just reload the page, the error will be in django messages
        location.reload();
    })
});
  
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