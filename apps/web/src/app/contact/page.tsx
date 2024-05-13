"use client";
import { useState, FC, useCallback, useEffect } from "react";
import { Roboto_Slab } from "next/font/google";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { GoogleRecaptchaForm } from "./google-recaptcha-form";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        <Navigation isNav={isOpen} />
        <div className={isOpen ? "ml-[25%]" : "m-auto"}>
          <Header onToggle={() => setIsOpen(!isOpen)} />
          <main className="px-6 py-2 max-w-6xl m-auto overflow-hidden bg-[#e6e6e6] dark:bg-[#66023c] dark:text-[#e6e6e6] text-[#363636]">
            <h1 className={robotoSlab.className}>Get in touch!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              quam quidem. Quia ab labore nihil quisquam dicta et necessitatibus
              suscipit, nemo magni accusantium neque voluptatum molestiae dolore
              ducimus consequatur alias?
            </p>
            <GoogleReCaptchaProvider
              useRecaptchaNet
              reCaptchaKey={process.env.RECAPTCHA_KEY as string}
              scriptProps={{ async: true, defer: true, appendTo: "body" }}
            >
              <GoogleRecaptchaForm />
            </GoogleReCaptchaProvider>
            <br />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
