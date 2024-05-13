"use client";
import React, { useState, FC, useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const GoogleRecaptchaForm: FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [noOfVerifications, setNoOfVerifications] = useState(0);
  const [dynamicAction, setDynamicAction] = useState("homepage");
  const [actionToChange, setActionToChange] = useState("");

  const clickHandler = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const result = await executeRecaptcha("dynamicAction");

    setToken(result);
    setNoOfVerifications((noOfVerifications) => noOfVerifications + 1);
  }, [dynamicAction, executeRecaptcha]);

  const handleTextChange = useCallback((event) => {
    setActionToChange(event.target.value);
  }, []);

  const handleCommitAction = useCallback(() => {
    setDynamicAction(actionToChange);
  }, [actionToChange]);

  useEffect(() => {
    if (!executeRecaptcha || !dynamicAction) {
      return;
    }

    const handleReCaptchaVerify = async () => {
      const token = await executeRecaptcha(dynamicAction);
      setToken(token);
      setNoOfVerifications((noOfVerifications) => noOfVerifications + 1);
    };

    handleReCaptchaVerify();
  }, [executeRecaptcha, dynamicAction]);

  return (
    <form>
      <div className="flex flex-col gap-3">
        <input
          className="rounded-md px-2 bg-transparent outline focus:bg-[#47012a] focus:outline-white"
          type="text"
          name="name"
          required
          placeholder="Basil Fawlty"
        />
        <input
          className="rounded-md px-2 bg-transparent outline focus:bg-[#47012a] focus:outline-white"
          type="email"
          name="email"
          required
          placeholder="basil@fawlty-towers.co.uk"
        />
        <input
          className="rounded-md px-2 bg-transparent outline focus:bg-[#47012a] focus:outline-white"
          type="tel"
          name="tel"
          placeholder="+44-12-345-678"
        />
        <textarea
          name="message"
          required
          placeholder="Don't mention the war&hellip;"
          className="rounded-md px-2 bg-transparent outline focus:bg-[#47012a] focus:outline-white"
        ></textarea>
        <div className="flex gap-3">
          <button className="bg-[#751b50] outline-[#751b50] text-white outline rounded-md px-2">Submit</button>
          <button className="bg-transparent outline rounded-md px-2">Reset</button>
        </div>
      </div>
    </form>
  );
};
