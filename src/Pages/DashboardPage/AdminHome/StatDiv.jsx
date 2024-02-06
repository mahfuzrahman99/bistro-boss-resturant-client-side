/* eslint-disable react/prop-types */
const StatDiv = ({ icon, name, value }) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-1">
        <div className="text-6xl font-bold">{icon}</div>
        <div>
          <p className="text-3xl font-extrabold text-center">{value}</p>
          <p className="text-xl font-medium">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default StatDiv;
