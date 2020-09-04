import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HMCjQDtKKWLHKWVPDvhvjoIG1ZZAnOK6je7GOQCCEmDR2URqcMUFGWbS4W93XsC3DjDQwmNEkTQEW7Sn6RDPxPb00LLjOB6Oh';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((err) => {
        console.log('Payment error: ', JSON.parse(err));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
