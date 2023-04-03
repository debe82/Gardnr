import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import "../Subscription.css";
import Fab from "@mui/material/Fab";
import StripeCheckout from "react-stripe-checkout";
function Subscription() {
  async function handleToken(token: any) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 50,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="subscription-container">
      <h1 className="subscription-logo">Gardnr</h1>
      <h3 className="subscription-item-container-heading">
        Premium access to unlimited plants and future updates
      </h3>
      <Stripe
        name="Gardnr Premium"
        description="Unlimited access"
        amount={5000}
        stripeKey="pk_test_51Mp4kxBuRbB2SJJACaJKQ2r5evDDu9WdhBjQuTBEQ6UsRl3xmqYXBzfHY5PCKqb3HIg7A1nYRH4g54AKLtFXNd7w00m7O4AU0U"
        token={handleToken}
      />
    </div>
  );
}

export default Subscription;
