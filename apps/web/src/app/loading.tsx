"use client";

import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
    color: "white",
    margin: "auto",
    position: "fixed",
    top: '50%',
    left: '50%',
    zIndex: "999",
    height: "100vh"
  };

export default function Loading() {
  let [loading, setLoading] = useState(true);

  return (
    <FadeLoader
      cssOverride={override}
      loading={loading}
      aria-label="Loading Spinner"
    />
  );
}
