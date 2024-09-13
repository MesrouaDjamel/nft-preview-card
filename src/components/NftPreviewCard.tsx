import Image from "next/image";
const NftPreviewCard = () => {
  return (
    <div className=" max-w-[21.875rem] flex flex-col gap-7 bg-very-dark-blue-card-bg rounded-2xl px-6 pt-6 pb-8 ">
      {/* Image Container */}
      <div className="max-w-[18.75rem] max-h-[18.75rem] relative">
        <Image
          src={"/image-equilibrium.jpg"}
          alt="Image equilibrium"
          width={300}
          height={300}
          className="rounded-2xl object-cover cursor-pointer"
        />

        <div className="group ">
          <div
            className="cursor-pointer w-[18.75rem] h-[18.75rem] rounded-2xl absolute top-0 group-hover:bg-cyan group-hover:opacity-30 transition-all ease-linear duration-500
          "
          ></div>
          <svg
            width="48"
            height="48"
            className="cursor-pointer opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transition-all ease-linear duration-300 -translate-x-1/2 -translate-y-1/2  "
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h48v48H0z" />
              <path
                d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Text Container */}
      <div>
        <h1 className="  hover:text-cyan transition-all ease-in-out duration-300 cursor-pointer text-2xl font-semibold pb-5 md:pb-7 text-white">
          Equilibrium #3429
        </h1>

        <p className="text-softBlue text-[18px] pb-4 md:pb-6">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg width="11" height="18">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <p className="text-cyan text-[18px]">0.041 ETH</p>
          </div>

          <div className="flex items-center gap-1">
            <svg width="17" height="17">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <p className="text-softBlue text-[18px]">3 days left</p>
          </div>
        </div>

        <hr className="h-[1px] my-4 md:my-6 border-very-dark-blue-line" />

        <div className="flex items-center gap-4 ">
          <div className="relative">
            <Image
              src={"/image-avatar.png"}
              alt="Image avatar"
              width={32}
              height={32}
            />
          </div>
          <p className="text-[18px] text-softBlue ">
            Creation of{" "}
            <span className="text-white cursor-pointer hover:text-cyan transition-all ease-in-out duration-300">
              Jules Wyvern
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NftPreviewCard;
