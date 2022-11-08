import React from "react";

const SecureSec = ({
  smallSubTitle,
  title,
  text,
  subTitle,
  imgOne,
  imgTwo,
}) => {
  return (
    <div className="w-full py-28 bg-[#F8F8F8] px-48">
      <main className="grid grid-cols-2 gap-24">
        <div className="grid grid-cols-2">
          <h3 className="text-2xl font-semibold p-5 flex items-center text-end text-white bg-[#395B64]">
            {subTitle}
          </h3>
          <img src={imgOne} alt="" className="w-80 row-span-2" />
          <img src={imgTwo} alt="" className="w-100" />
        </div>
        <div>
          <h3 className="text-xl">{smallSubTitle} </h3>
          <h2 className="text-6xl py-5 font-semibold">{title} </h2>
          <p>{text} </p>
        </div>
      </main>
    </div>
  );
};

export default SecureSec;
