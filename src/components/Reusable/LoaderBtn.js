import React, { useState } from "react";
import Loader from "./Loader";

function LoaderBtn({ loading, title }) {
  return (
    <button
      type="sumbit"
      className={`app-button width100`}
      style={{ position: "relative" }}
    >
      {!loading && <span>{title}</span>}
      {loading && <Loader loading={loading} />}
    </button>
  );
}

export default LoaderBtn;
