import React, { useState } from "react";
import { Skeleton } from "antd";

const HeaderLoading = () => {
  const [state, setState] = useState({
    active: true,
    size: "defaul",
  });

  return (
    <React.Fragment>
      <div className="login-loading">
        <Skeleton.Button
          active={state.size}
          size={state.size}
          className="account-login-loading"
        />
        <Skeleton.Button
          active={state.size}
          size={state.size}
          className="account-login-loading"
        />
      </div>
      <div className="header-loading">
        <div>
          <img
            src={`${process.env.REACT_APP_API_URL_IMAGE}logo/logo512.png`}
            className="logo-style"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderLoading;
