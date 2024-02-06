import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import LOGINGPAGEBG from "../assets/others/authentication.png";
import login from "../assets/others/authentication1-removebg-preview.png";
import swal from "sweetalert";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Component/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  console.log(from);
  const parentDivStyle = {
    backgroundImage: `url(${LOGINGPAGEBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Check if captcha is validated before proceeding with login
    if (!disabled) {
      signInUser(email, password)
        .then(() => {
          const user = { email };
          axios
            .post(
              "https://bistro-boss-resturant-server-side-wcku.vercel.app/jwt",
              user,
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.success) {
                swal("Success!", "Login Successfully!", "success");
                navigate(from, { replace: true });
              }
            });
        })
        .catch(() => {
          swal("Error!", "Please check your email and password!", "error");
        });
    } else {
      // Show an error message or toast regarding captcha validation failure
      swal("Error!", "Captcha validation failed!", "error");
    }
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Captcha Matched",
        showConfirmButton: false,
        timer: 1000,
      });
      setDisabled(false);
      captchaRef.reset();
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Captcha Does Not Match",
        showConfirmButton: false,
        timer: 1000,
      });
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="" style={parentDivStyle}>
        <div className="flex justify-center items-center lg:p-12 ">
          <div className="md:grid grid-cols-2 justify-center items-center gap-8 border-b-4 border-r-4 border-[#00000040] shadow-xl md:mx-28">
            <div className="col-span-1">
              <img src={login} alt="" />
            </div>
            <div className="">
              <form
                onSubmit={handleLogin}
                className="px-8 py-4 md:py-8 rounded "
              >
                <div className="text-center ">
                  <h1 className="text-2xl  font-bold">Login your account!</h1>
                  <br />
                  <hr className="" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  ">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <div>
                    <label className="label">
                      <span className="label-text w-full">Password</span>
                    </label>
                    <input
                      type={!show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="p-3 rounded-md bg-[#F3F3F3] w-full"
                      required
                    />
                  </div>
                  <div className="absolute top-12 right-2">
                    <span
                      className="text-xl font-extrabold"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                    </span>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Inter Captcha"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                    required
                  />
                  <div>
                    <button
                      onClick={handleValidateCaptcha}
                      className="btn btn-xs btn-outline rounded border-none mt-1 bg-black bg-opacity-10 hover:bg-opacity-30"
                    >
                      Validate
                    </button>
                  </div>
                </div>
                <div className="form-control mt-3">
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn bg-[#403F3F] text-white rounded-none"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-semibold">
                    Login With...!!
                  </p>
                  <SocialLogin disabled={disabled} />
                </div>
                <p className="text-center mt-2 text-[#706F6F]">
                  Do not have an account? Please
                  <Link className="text-[#F75B5F] font-bold" to="/register">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
