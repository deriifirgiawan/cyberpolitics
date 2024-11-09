interface SectionProblemItemProps {
  title: string;
  subtitle: string;
}

export const SectionProblemItem = (_props: SectionProblemItemProps) => {
  const { title, subtitle } = _props;
  return (
    <div
      data-aos="fade-out"
      data-aos-duration="2000"
      data-aos-once="true"
      className="w-[631px] h-fit lg:h-[334px] md:h-[334px] border-2 border-[#54F4FC] rounded-md p-2 lg:p-6 md:p-6 flex flex-col justify-center items-center"
    >
      <h1
        data-aos="fade-out"
        data-aos-duration="2100"
        data-aos-once="true"
        className="text-1xl lg:text-2xl md:text-2xl font-bold"
      >
        {title}
      </h1>
      <p
        data-aos="fade-out"
        data-aos-duration="2200"
        data-aos-once="true"
        className="text-sm lg:text-[20px] md:text-[20px] font-medium mt-12"
      >
        {subtitle}
      </p>
    </div>
  );
};
