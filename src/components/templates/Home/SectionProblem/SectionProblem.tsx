"use client";
import { HomeData } from "@/data/home.data";
import { SectionProblemItem } from "./SectionProblemItem";

interface ISectionProps {
  type: "default" | "bandung";
}
export const SectionProblem = (_props: ISectionProps) => {
  const { type = "default" } = _props;
  const { sectionProblem } = HomeData;
  return (
    <section
      id="#problem"
      className="text-center w-full mt-6 px-6 lg:px-[72px] md:px-[72px]"
    >
      <h1
        data-aos="fade-out"
        data-aos-duration="1100"
        data-aos-once="true"
        className="lg:text-3xl md:text-3xl text-2xl font-bold"
      >
        {type === "default" ? sectionProblem.title : "Permasalah Kota Bandung"}
      </h1>

      <div className="mt-16 flex flex-wrap gap-4 justify-center items-center">
        {type === "default"
          ? sectionProblem.lists.map((value, index) => (
              <SectionProblemItem
                key={`problem--${index}`}
                title={value.title}
                subtitle={value.subtitle}
              />
            ))
          : sectionProblem.bdgList.map((value, index) => (
              <SectionProblemItem
                key={`problem--${index}`}
                title={value.title}
                subtitle={value.subtitle}
              />
            ))}
      </div>
    </section>
  );
};
