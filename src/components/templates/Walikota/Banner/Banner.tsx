import { ImageConstant } from "@/constants";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="pb-4 lg:pb-0 md:pb-0 mt-[72px] mx-[24px] lg:mx-[72px] md:mx-[72px] bg-[#171414] pt-12 flex items-center justify-between px-4 flex-col lg:flex-row md:flex-row ">
      <Image
        src={ImageConstant.BANNER_HARU}
        width={1000}
        height={400}
        alt="Haru&Dhani"
      />

      <div className="text-center">
        <h1 className="font-bold text-lg md:text-1xl lg:text-1xl italic">
          "Bersama Haru Dhani, kita bangun Bandung yang tidak hanya maju, tapi
          juga bersahaja dan berkeadilan. Saatnya Bandung lebih inklusif untuk
          semua warganya."
        </h1>
      </div>
    </section>
  );
};
