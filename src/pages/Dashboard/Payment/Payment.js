import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);

  const { itemName, price } = booking;

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-3xl">Payment for {itemName}</h1>
        <p>
          Please pay <strong>${price}</strong>
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckOutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
