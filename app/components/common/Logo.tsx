type LogoProps = {
  footer: boolean;
};

export default function Logo({ footer }: LogoProps) {
  return (
    <figure
      className={`flex  w-fit max-w-full  items-center justify-center ${
        footer ? "flex-row items-center justify-center" : " flex-col"
      }`}
    >
      <img
        src="https://res.cloudinary.com/deaejawfj/image/upload/v1669288514/logoconceicaoadv_pqd5oa_1_bhwvcx.png"
        alt="logo do Conceição Advogados"
        height={50}
        width={50}
        className={footer ? " w-28" : "w-12"}
      />
      <figcaption
        className={` mt-1 max-w-fit text-center  font-extrabold leading-none text-white ${
          footer ? " text-2xl" : "text-lg"
        } `}
      >
        CONCEIÇÃO <br></br>
        <span
          className={`${
            footer ? " text-xl" : " text-sm"
          } font-light tracking-wider`}
        >
          ADVOGADOS
        </span>{" "}
        <br></br>
      </figcaption>
    </figure>
  );
}
