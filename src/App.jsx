import { useState } from "react";
import "./App.css";
import Login from "./components/FormsPattern";
import redDot from "./images/redDot.svg";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  let [isLogin, setIsLogin] = useState(true);
  let [status, setStatus] = useState("Login");
  const [activeBtn, setActiveBtn] = useState("Login");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", values);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function changeActiveBtn(button) {
    setActiveBtn(button);
  }

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#2c1340]">
      <div className="flex flex-col w-[600px] h-[440px] rounded-[15px] bg-[#1E1E1E] px-[48px] pt-[30px] border-[1px] border-[solid] border-[#FFF] relative">
        <div className="flex gap-[4px] w-[504px] h-[40px]">
          <button
            className={`${
              activeBtn === "Login" ? "bg-slate-300/50" : "bg-white"
            } w-[50%] h-[100%] bg-white flex justify-center items-center text-[#000] text-[20px] not-italic font-medium leading-[normal] uppercase`}
            onClick={() => {
              setIsLogin(true);
              setStatus("Login");
              changeActiveBtn("Login");
            }}
          >
            Login
          </button>
          <button
            className={`${
              activeBtn !== "Login" ? "bg-slate-300/50" : "bg-white"
            } w-[50%] h-[100%] bg-white flex justify-center items-center text-[#000] text-[20px] not-italic font-medium leading-[normal] uppercase self-end`}
            onClick={() => {
              setStatus("Sign up");
              changeActiveBtn("Signup");
              setIsLogin(false);
            }}
          >
            Sign up
          </button>
        </div>
        <p className="mt-[30px] mb-[10px] text-[#FFF]  text-[24px] not-italic font-medium leading-[normal] uppercase">
          {status}
        </p>
        {/* Login Logic */}
        {isLogin && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            <Login
              name="username"
              placeholder="Username"
              type="text"
              img="user"
              onChange={onChange}
              required={true}
            />
            <Login
              name="email"
              placeholder="Email address"
              type="email"
              img="email"
              onChange={onChange}
              required={true}
            />
            <Login
              name="password"
              placeholder="Password"
              type="password"
              img="password"
              additional="mb-[10px]"
              onChange={onChange}
              errorMessage="Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character"
              pattern="^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$"
              required={true}
            />
            <button className="absolute bottom-[23px] bg-[#37FF63] w-[167px] h-[40px]">
              {status}
            </button>
          </form>
        )}
        {/* Signup Logic */}
        {!isLogin && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <div className="flex gap-[4px]">
              <Login
                name="firstName"
                placeholder="First Name"
                type="text"
                width="100%"
                onChange={onChange}
              />
              <Login
                name="lastName"
                placeholder="Last Name"
                type="text"
                width="100%"
                additionalInput="relative left-[1px]"
                onChange={onChange}
              />
            </div>
            <Login
              name="username"
              placeholder="Username"
              type="text"
              img="user"
              onChange={onChange}
            />
            <Login
              name="email"
              placeholder="Email address"
              type="email"
              img="email"
              onChange={onChange}
            />
            <Login
              name="password"
              placeholder="Password"
              type="password"
              img="password"
              additional="mb-[10px]"
              onChange={onChange}
            />
            <button className="absolute bottom-[23px] bg-[#37FF63] w-[167px] h-[40px]">
              {status}
            </button>
          </form>
        )}
        {showError && (
          <span className="flex text-[#FFF] text-[12px]">
            <img src={redDot} className="self-start mt-[3px] mr-[10px]" />
            You failed to authenticate (incorrect username, login, or password).
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
