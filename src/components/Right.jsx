import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import complete from '../assets/icon-complete.svg'

const Right = ({ obj, setobj, setanimation,animation }) => {
  const [hide, sethide] = useState(false)
  const [confirm, setconfirm] = useState(false)
  useEffect(() => {
    setobj({
      cardName: "nika qanashvili",
      cardNumber: "0000 0000 0000 0000",
      cvc: 123,
      mm: "01",
      yy: "14",
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      mm: "",
      yy: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      cardName: Yup.string().min(10, "Too short!").required(),
      cardNumber: Yup.string().min(19, "fill the numbers").required(),
      mm: Yup.number().required("Cant be blank"),
      yy: Yup.number().required("Cant be blank"),
      cvc: Yup.number().required(),
    }),
    onSubmit: (values) => {
      formik.handleReset();
      setobj(values);
      setanimation(true);
      setTimeout(() => {
        sethide(true)
        setanimation(false);
      }, 1000);
    },
  });
  function getBackForm(){
    setanimation(true)
    setconfirm(true)
   setTimeout(()=>{
  sethide(false)
  setanimation(false)
   },1000)
  }
  const objectLength = Object.keys(formik.errors).length;
  return (
    <>
    <div className={`absolute px-8 flex flex-col justify-center ${animation?'translate-x-[50rem]':''} ${hide?'hidden':''} right-0 w-[45%] h-full p-5`}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-[26rem] text-[#21092f] h-[26rem]"
      >
        <label className="flex flex-col my-3" htmlFor="">
          CARDHOLDER NAME
          <input
            name="cardName"
            maxLength={16}
            value={formik.values.cardName}
            onChange={formik.handleChange}
            onChangeCapture={(e) => {
              setobj({ ...obj, cardName: e.target.value });
            }}
            onBlur={formik.handleBlur}
            placeholder="e.g. Jane Appleseed"
            className={`border my-1 ${
              formik.errors.cardName && formik.touched.cardName
                ? "border-red-500"
                : "border-gray-500"
            }  rounded-md outline-none h-11 p-2`}
            type="text"
          />
          {formik.touched.cardName && formik.errors.cardName ? (
            <p className="text-xs text-red-500">{formik.errors.cardName}</p>
          ) : (
            <p></p>
          )}
        </label>
        <label className="flex flex-col my-3" htmlFor="">
          CARD NUMBER
          <input
            minLength={15}
            name="cardNumber"
            value={formik.values.cardNumber
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim()}
            onChange={formik.handleChange}
            onChangeCapture={(e) => {
              setobj({ ...obj, cardNumber: e.target.value });
            }}
            maxLength={19}
            onBlur={formik.handleBlur}
            placeholder="e.g. 1234 5678 9123 0000"
            className={`border my-1 ${
              formik.errors.cardNumber && formik.touched.cardNumber
                ? "border-red-500"
                : "border-gray-500"
            } rounded-md outline-none h-11 p-2`}
            type="text"
          />
          <p className="text-xs text-red-600">
            {formik.touched.cardNumber &&
              formik.errors.cardNumber &&
              formik.errors.cardNumber}
          </p>
        </label>
        <span className="flex w-full h-11 items-center my-5">
          <label className="flex flex-col" htmlFor="">
            EXP.DATE (MM/YY)
            <div className="flex flex-wrap">
              <input
                maxLength={2}
                name="mm"
                value={formik.values.mm}
                onChange={formik.handleChange}
                onChangeCapture={(e) => {
                  setobj({ ...obj, mm: e.target.value });
                }}
                onBlur={formik.handleBlur}
                placeholder="MM"
                className={`border w-20 my-1 ${
                  formik.errors.mm && formik.touched.mm
                    ? "border-red-500"
                    : "border-gray-500"
                } rounded-md outline-none h-11 p-2`}
                type="text"
              />
              <input
                maxLength={2}
                name="yy"
                value={formik.values.yy}
                onChange={formik.handleChange}
                onChangeCapture={(e) => {
                  setobj({ ...obj, yy: e.target.value });
                }}
                onBlur={formik.handleBlur}
                placeholder="YY"
                className={`border mx-2 w-20 my-1 ${
                  formik.errors.yy && formik.touched.yy
                    ? "border-red-500"
                    : "border-gray-500"
                } rounded-md outline-none h-11 p-2`}
                type="text"
              />
              <p className="text-xs text-red-600">
                {formik.touched.mm &&
                  formik.errors.mm &&
                  formik.errors.mm.slice(0, 26)}
              </p>
            </div>
          </label>
          <label className="flex flex-col " htmlFor="">
            CVC
            <input
              maxLength={3}
              name="cvc"
              value={formik.values.cvc}
              onChange={formik.handleChange}
              onChangeCapture={(e) => {
                setobj({ ...obj, cvc: e.target.value });
              }}
              onBlur={formik.handleBlur}
              placeholder="e.g. 123"
              className={`border my-1 ${
                formik.errors.cvc && formik.touched.cvc
                  ? "border-red-500"
                  : "border-gray-500"
              } rounded-md w-60 outline-none h-11 p-2`}
              type="text"
            />
            <p className="text-xs text-red-600">
              {formik.touched.cvc &&
                formik.errors.cvc &&
                formik.errors.cvc.slice(0, 27)}
            </p>
          </label>
        </span>
        <button
          className={`text-white ${
            objectLength > 0 ? "apply-shake" : "noshake"
          } bg-[#21092f] hover:bg-[#451d5c] h-12 rounded-md mt-10 text-xl`}
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
    <div className={`w-72 h-72 absolute right-80 ${hide?'aloo':'hidden'} ${confirm?'translate-x-[50rem]':''} top-52 flex flex-col items-center`}>
         <img src={complete} alt="" />
         <h1 className="text-3xl my-4">THANK YOU!</h1>
         <p className="text-[#21092f]">We've added your card details</p>
         <button onClick={getBackForm} className="bg-[#21092f] hover:bg-[#451d5c] h-12 rounded-md mt-10 text-white text-xl w-full">Continue</button>
    </div>
    </>
  );
};

export default Right;
