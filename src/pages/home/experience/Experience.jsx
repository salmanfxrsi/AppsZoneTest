import ExperienceCard from "../../../components/ExperienceCard";
import work_experience_one from "../../../assets/work_experience_one.png";
import work_experience_two from "../../../assets/work_experience_two.png";
import work_experience_three from "../../../assets/work_experience_three.png";
import work_experience_four from "../../../assets/work_experience_four.png";

const Experience = () => {
  const experiences = [
    {
      _id: 0,
      image: work_experience_one,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process",
    },
    {
      _id: 1,
      image: work_experience_two,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process",
    },
    {
      _id: 2,
      image: work_experience_three,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process",
    },
    {
      _id: 3,
      image: work_experience_four,
      title: "CIB on the Mobile",
      description:
        "Take your client onboard seamlessly by our amazing tool of digital onboard process",
    },
  ];

  return (
    <div className="relative">
      <h1 className="text-[2.5rem]">Work Experience</h1>

      {/* Experience Cards */}
      <div className="grid 2xl:grid-cols-2 mt-14 gap-8 z-50">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>

      <div className="bg-experience absolute top-0 left-70"></div>
    </div>
  );
};

export default Experience;
