function ProjectCard({
  title,
  description,
  year,
  classification,
  techStack,
  github,
  video,
  demo,
}) {
  return (
    <div className="hover:scale-105 duration-300 flex flex-col bg-gray-100 dark:bg-gray-600 border border-indigo-500 hover:shadow-2xl rounded-2xl">
      <div className="m-4 flex-1">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {(year || classification) && (
          <p className="mb-2 text-sm mt-2">
            {classification}
            {year && classification && " | "}
            {year}
          </p>
        )}
        <p>{description}</p>
      </div>
      {techStack && (
        <p className="m-4 font-extrabold text-gray-400">{techStack}</p>
      )}
      {/* Links */}
      <div className="m-4 flex justify-center gap-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-start"
          >
            GitHub
          </a>
        )}

        {video && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-center"
          >
            Video
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-end"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
