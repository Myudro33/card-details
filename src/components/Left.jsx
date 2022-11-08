import React from "react";
import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import logo from "../assets/card-logo.svg";

const Left = ({obj}) => {
  return (
    <div className="md:h-full md:w-1/2 xs:h-1/2 xs:w-full  absolute">
      <div className=" mt-10 w-[447px] h-[245px] flex justify-center items-center dp:translate-x-52 dp:translate-y-16">
        <img
          className="z-20 absolute -translate-y-20 -translate-x-40"
          src={logo}
          alt="logo"
        />
        <h1 className="z-20 absolute text-3xl text-white dp:translate-y-5 tracking-widest">
          {obj.cardNumber}
        </h1>
        <h1 className="z-20 absolute text-xl text-white tracking-widest uppercase translate-y-20 -translate-x-[6.2rem]">
          {obj.cardName}
        </h1>
        <h1 className="z-20 absolute text-xl text-white tracking-widest uppercase translate-y-20 translate-x-[9.7rem]">
          {`${obj.mm}/${obj.yy}`}
        </h1>
        <img className="z-10 w-full h-full" src={cardFront} alt="card" />
      </div>



      <div className=" mt-10 w-[447px] h-[245px] flex justify-center items-center dp:translate-x-80 dp:translate-y-20">
      <h1 className="z-20 absolute text-2xl text-white dp:translate-x-36 tracking-widest">
          {obj.cvc}
        </h1>
      <img src={cardBack} alt="card" />
      </div>
    </div>
  );
};

export default Left;
