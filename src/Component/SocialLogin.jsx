/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = ({ disabled }) => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then(() => {
          swal("Success!", "Login Successfully!", "success");
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch(() => {
        swal("Error!", "Please check your email or password!", "error");
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then(() => {
          swal("Success!", "Login Successfully!", "success");
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch(() => {
        swal("Error!", "Please check your email or password!", "error");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2 my-2">
        <button
          disabled={disabled}
          onClick={handleGoogleLogin}
          className="btn border btn-outline w-1/2 border-blue-500"
        >
          <FcGoogle />
          Google
        </button>
        <button
          disabled={disabled}
          onClick={handleGithubLogin}
          className="btn border btn-outline w-1/2 border-black"
        >
          <FaGithub />
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
