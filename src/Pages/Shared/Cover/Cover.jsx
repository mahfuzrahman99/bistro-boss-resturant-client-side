/* eslint-disable react/prop-types */
const Cover = ({ img, title, subTitle, four, five }) => {
  return (
    <div
      className={`bg-cover bg-center  mb-8 py-12 px-10 relative  ${five ? "h-[80vh]" : "h-[60vh]"}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={`" px-20 mx-auto   bg-black bg-opacity-50 w-2/3  relative" ${four ? "mt-28 py-20" : "mt-8 py-12"}`}>
        <div className="md:flex gap-7 justify-center items-center">
          <div>
            <div className="text-white font-cinzel text-center">
              <p className="text-5xl font-bold uppercase">{title}</p>
              <p className="font-normal">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
