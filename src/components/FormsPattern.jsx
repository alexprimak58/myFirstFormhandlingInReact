import React, { useState } from "react";
import emailImg from "../images/email.svg";
import passwordImg from "../images/password.svg";
import userImg from "../images/user.svg";
import redDot from "../images/redDot.svg";
const imgMap = {
  email: emailImg,
  password: passwordImg,
  user: userImg,
};

function Login(props) {
  const [focused, setFocused] = useState(false);
  const {
    name,
    img,
    type,
    placeholder,
    width = "504px",
    additionalInput = "",
    additional = "",
    onChange,
    errorMessage,
    ...inputProps
  } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  const image = imgMap[img];
  return (
    <>
      <div className={`relative ${additional} w-[100%]`}>
        <input
          {...inputProps}
          name={name}
          onChange={onChange}
          className={`w-[${width}] h-[40px] bg-white outline-none border-[none] pl-[15px] text-[#505050] text-[16px] ${additionalInput}`}
          type={type}
          placeholder={placeholder}
        />

        {image && (
          <img src={image} className="absolute right-[10px] top-[9px]" />
        )}
      </div>
    </>
  );
}

export default Login;
