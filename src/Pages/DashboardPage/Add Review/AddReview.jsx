import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle";
import { RxRocket } from "react-icons/rx";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddReview = () => {

    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    
    const handleAddItems = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user.displayName;
        const suggestion = form.suggestion.value;
        const reviewData = {name, suggestion};
        form.reset();
        axiosPublic.post("/reviews",reviewData).then((responses) => {
              if (responses.data.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: `Review added to reviews list`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                window.history.back();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Failed to add review to the reviews list. Please try again.",
                });
              }
            })
          .catch((error) => {
            console.error("Error posting to reviews list:", error);
          });
      };

  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <SectionTitle
          subHeading={`Sharing is Caring!!!`}
          heading={`GIVE A REVIEW...`}
        />
      </div>
      <div className="bg-[#F3F3F3] p-4 mb-12">
        <div className="text-center font-medium text-2xl space-y-2">
          <p>Rate US!</p>
          <p>
            {/* md */}
            <div className="rating rating-lg">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#D0D0D0]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#D0D0D0]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#D0D0D0]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#D0D0D0]"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-[#D0D0D0]"
              />
            </div>
          </p>
        </div>
        <form onSubmit={handleAddItems} className="mx-28 space-y-4 mt-6">
          <div>
            <label>
              <h1>Which recipe you liked most?</h1>
            </label>
            <input
              type="text"
              name="liked"
              className="p-2 mt-2 w-full rounded-lg  bg-white"
              placeholder="Recipe you liked most"
            />
          </div>
          <div>
            <label>
              <h1>Do you have any suggestion for us?</h1>
            </label>
            <input
              type="text"
              name="suggestion"
              className="p-2 mt-2 w-full rounded-lg  bg-white"
              placeholder="Suggestion"
            />
          </div>
          <div>
            <label>
              <h1>Kindly express your care in a short way.</h1>
            </label>
            <textarea
              type="text"
              name="care"
              className="p-2 mt-2 w-full rounded-lg  bg-white"
              placeholder="Review in detail"
            />
          </div>
          <div className="flex ">
            <div className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#835D23] to-[#B58130] text-lg btn px-4 py-1 my-2">
              <input
                type="submit"
                name="submit"
                value="Send Review"
                className=" text-white font-semibold text-center bg-transparent hover:bg-transparent border-none rounded-md "
              />
              <span className="text-white">
                <RxRocket />
              </span>
            </div>
          </div>
        </form>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default AddReview;
