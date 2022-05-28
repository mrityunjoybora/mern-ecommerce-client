import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";

function Footer() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-start">
      <div className="flex-1 flex flex-col p-6 md:sm:pb-10 gap-4">
        <p className="text-4xl font-extrabold">BORACOM</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex justify-start gap-6 items-center">
          <div>
            <Facebook />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Twitter />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-6 md:sm:pb-10 gap-4">
        <p className="font-semibold text-lg">Useful Links</p>
        <ul className="flex flex-wrap md:gap-0 gap-2">
          <li className="md:w-[50%] sm:pb-1">Home</li>
          <li className="md:w-[50%] w-full sm:pb-1">Cart</li>
          <li className="md:w-[50%] w-full sm:pb-1">Man Fashion</li>
          <li className="md:w-[50%] w-full sm:pb-1">Women Fashion</li>
          <li className="md:w-[50%] w-full sm:pb-1 ">Accessories</li>
          <li className="md:w-[50%] w-full sm:pb-1">My Account</li>
          <li className="md:w-[50%] w-full sm:pb-1">Order Tracking</li>
          <li className="md:w-[50%] w-full sm:pb-1">Wishlist</li>
          <li className="md:w-[50%] w-full sm:pb-1">Terms</li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col p-6 md:sm:pb-10 gap-4 w-full">
        <p className="font-semibold text-lg">Contact</p>
        <div className="flex items-center gap-4">
          <Room />
          622 Jorhat, Assam , India, 785601
        </div>
        <div className="flex items-center gap-4">
          <Phone />
          +91 234 56 78 987
        </div>
        <div className="flex items-center gap-4">
          <MailOutline />
          mjborabiz@gmail.com
        </div>
        <div className="mt-4">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
