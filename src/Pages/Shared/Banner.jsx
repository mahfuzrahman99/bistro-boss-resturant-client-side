import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} interval={2000} stopOnHover={false} infiniteLoop={true} >
        <div className="h-[85vh] " style={{ margin: "auto" }}>
          <img className="h-full object-cover " src={img1} />
        </div>
        <div className="h-[85vh] ">
          <img className="h-full object-cover" src={img2} />
        </div>
        <div className="h-[85vh] ">
          <img className="h-full object-cover" src={img3} />
        </div>
        <div className="h-[85vh] ">
          <img className="h-full object-cover" src={img4} />
        </div>
        <div className="h-[85vh] ">
          <img className="h-full object-cover" src={img6} />
        </div>
        <div className="h-[85vh] ">
          <img className="h-full object-cover" src={img5} />
        </div>
      </Carousel>
      <style>
        {`
                .thumbs-wrapper {
                    display: flex;
                    justify-content: center;
                }

                .thumbs {
                    max-width: 50%; /* Adjust this width as needed */
                }
                `}
      </style>
    </div>
  );
};

export default Banner;
