import React from "react";

const Loader = ({ loading = true }) => {
  return (
    <>
      {loading && (
        <div className="loader-overlay d-flex justify-center align-center">
          <div className="loader-wrapper d-flex justify-center align-center">
            <div className="loadingio-spinner-dual-ring-wecz1vi0odr">
              <div className="ldio-m9h0w5l6hui">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
