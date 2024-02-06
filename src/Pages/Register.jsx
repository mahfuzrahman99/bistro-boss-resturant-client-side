import registerImg from "../assets/others/authentication1-removebg-preview.png";
import REGISTATIONPAGEBG from "../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Component/SocialLogin";

const Register = () => {
  const [show, setShow] = useState(true);
  const { createUser, updateTheProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // State for captcha validation
  const [captchaValidated, setCaptchaValidated] = useState(false);

  const parentDivStyle = {
    backgroundImage: `url(${REGISTATIONPAGEBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
      createUser(email, password)
        .then(() => {
          updateTheProfile(name, photoURL)
            .then(() => {
              const userInfo = { name, photoURL, password, email };
              axiosPublic.post("/users", userInfo)
                .then((res) => {
                  if (res.data.insertedId) {
                    e.target.reset();
                    swal("Success!", "Registration Successfully!", "success");
                    navigate("/login");
                  }
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          swal("Error!", "Please check your email or password!", "error");
        });
    } else {
      swal(
        "Error",
        "Your Password Must Be 6 characters or longer and have at least an uppercase, a special character, and a numeric character",
        "error"
      );
      return;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleCaptchaValidation = (isValid) => {
    // Set the captcha validation status
    setCaptchaValidated(isValid);
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div style={parentDivStyle} className="">
        <div className="flex justify-center  items-center  lg:p-12 ">
          <div className="md:grid grid-cols-2 justify-center items-center gap-8 border-b-4 border-r-4 border-[#00000040] shadow-xl md:mx-28">
            <div className="">
              <form
                onSubmit={handleRegister}
                className="py-6 px-8 m-4 md:px-12"
              >
                <div className="text-center ">
                  <h1 className="text-xl md:text-2xl font-bold">
                    Register your account!
                  </h1>
                  <br />
                  <hr className="" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                  />
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
                      <span className="label-text ">Password</span>
                    </label>
                    <input
                      type={!show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="p-3 rounded-md bg-[#F3F3F3] w-full"
                      required
                    />
                    <div className="absolute top-12 right-2">
                      <span
                        className="text-xl  font-extrabold"
                        onClick={() => setShow(!show)}
                      >
                        {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className=""
                    required
                  />
                  <p className="text-base font-normal text-[#706F6F]">
                    Accept Terms & Conditions
                  </p>
                </div>
                <div className="form-control mt-3">
                  <button
                    className="btn bg-[#403F3F] text-white rounded-none"
                  >
                    Register
                  </button>
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-semibold">
                    Login With...!!
                  </p>
                  {/* Pass the disabled state to SocialLogin */}
                  <SocialLogin disabled={!captchaValidated} />
                </div>
                <p className="text-center mt-2 text-[#706F6F]">
                  Already have an account? Please
                  <Link className="text-[#F75B5F] font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
            <div className="col-span-1">
              <img src={registerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
