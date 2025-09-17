function SkillCard({ skill, src, alt }) {
  return (
    <div className="hover:scale-105 duration-300 flex flex-col bg-gray-100 dark:bg-gray-600 border border-indigo-500 hover:shadow-2xl rounded-2xl">
      <div className="m-4 flex-1">
        <img src={src} alt={alt} />
      </div>
      <p className="flex justify-center items-center font-semibold">{skill}</p>
    </div>
  );
}

export default SkillCard;
