import { Link } from "react-router";

const ExperienceCard = ({ experience: { _id, image, title, description } }) => {
  return (
    <div className="flex gap-4 rounded-t-lg rounded-b-3xl border-t-4 border-[#4F228D] bg-[#130428] pr-24 pl-10 py-10 shadow-2xl">
      <img src={image} alt={title} className="w-auto h-auto" />

      <div>
        <h1 className="text-[28px] font-bold">{title}</h1>
        <p className="mt-1 mb-6 text-[8px] font-medium">{description}</p>
        <Link
          to={`/experience/${_id}`}
          className="uppercase rounded-[10px] border border-[#693B93] bg-[#11071F] px-6 py-1"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
