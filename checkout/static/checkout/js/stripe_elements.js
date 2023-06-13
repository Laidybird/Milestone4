var stripe_public_key = $('#id_stripe_public_key').text();
var client_secret = $('#id_client_secret').text();
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

var form = document.getElementById('payment-form');

// Get the card element
const cardElement = elements.create('card');

// Mount the card element
cardElement.mount('#card-element');

// Handle card validation errors
cardElement.addEventListener('change', function (event) {
    const cardErrors = document.getElementById('card-errors');
    if (event.error) {
        cardErrors.textContent = event.error.message;
    } else {
        cardErrors.textContent = '';
    }
});

form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    card.update({ 'disabled': true });
    $('#submit-button').attr('disabled', true);

    // Create a payment method using the card element
    stripe.createPaymentMethod({
        type: 'card',
        card: card,
    }).then(function(result) {
        if (result.error) {
            var errorDiv = document.getElementById('card-errors');
            errorDiv.textContent = result.error.message;
            card.update({ 'disabled': false });
            $('#submit-button').attr('disabled', false);
        } else {
            // Payment method created successfully, proceed with payment confirmation
            stripe.confirmCardPayment(client_secret, {
                payment_method: result.paymentMethod.id
            }).then(function(confirmResult) {
                if (confirmResult.error) {
                    // Payment confirmation failed
                    var errorDiv = document.getElementById('card-errors');
                    errorDiv.textContent = confirmResult.error.message;
                    card.update({ 'disabled': false });
                    $('#submit-button').attr('disabled', false);
                } else {
                    // Payment confirmation succeeded, submit the form
                    form.submit();
                }
            });
        }
    });
});