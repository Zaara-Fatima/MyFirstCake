import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import {Button} from '../Button'

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit =()=>{
    console.log("hi")
  }
  return (
    <form>
      <div className="flex flex-col gap-4 w-full rounded-xl shadow-[#797777] bg-white px-4 py-3 shadow-sm ">
        <p>Shipping Address</p>
        <div className="flex gap-2 ">
          <Input label="First Name" placeholder="John" />
          <Input label="last Name" placeholder="Doe" />
        </div>
        <Input label="Address" placeholder="123 Cake Lane" />
        <div className="flex gap-2 ">
          <Input label="City" placeholder="Sweetville" />
          <Input label="State/Province" placeholder="CA" />
        </div>
        <div className="flex gap-2 ">
          <Input label="Postal Code" placeholder="90210" />
          <Input label="Country" placeholder="USA" />
        </div>
        <p>Payment Information</p>
        <Input label="Card Number" placeholder="**** **** **** 1234" />
        <div className="flex gap-2 flex-wrap">
          <Input label="Expiration Date" placeholder="MM/YY" />
          <Input label="CVV" placeholder="123" />
          <Input label="Name on Card" placeholder="John Doe" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-[#5a5a5a] text-base leading-none">
            <span className="material-symbols-outlined ">lock</span>
            Secure Payment
          </p>
          <p className="text-[#5a5a5a] ">
            <span className="material-symbols-outlined">credit_card</span>
            SSL Encrypted
          </p>
        </div>
        <Button text="Place Order" className="bg-[#b76e79] text-white" onClick={handleSubmit(submit)}/>
      </div>
    </form>
  );
};
