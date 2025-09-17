import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-700 overflow-y-auto">
      {/* Header Section */}
      <header className="justify-center w-screen items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 p-6">
        <div>
          <h1 className="text-6xl text-white font-semibold">Colby</h1>
          <p className="text-2xl text-white mt-6">Computer Science Student</p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl border-b-2 font-semibold border-b-indigo-500 pb-2 mb-6 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <ProjectCard
              title="Project Management App"
              description="A modern task & project management web app built with React and Supabase. Create projects, manage tasks, and stay on track with realtime updates, and sorting."
              year="2025"
              classification="Personal"
              techStack="React, Vite, Supabase, Tailwind CSS"
              github="https://github.com/ckstrang/Todo-Tracker"
              demo="https://colby-to-do-tracker.vercel.app/"
            />
            <ProjectCard
              title="File Encryption App"
              description="A secure, multi-threaded file encryption and decryption application built with Python, CustomTkinter and PyCryptodome supporting multiple file types (text, images, videos, and more)."
              year="2025"
              classification="Personal"
              techStack="Python, CustomTkinter, PyCryptodome"
              github="https://github.com/ckstrang/File-Encryption-App"
            />
            <ProjectCard
              title="Pathfinding Visualizer"
              description={
                "An interactive pathfinding visualizer built with Python and CustomTkinter. Design custom environments, simulate algorithms in real time, and gain an intuitive understanding of how classic search algorithms work."
              }
              year="2025"
              classification="Personal"
              techStack="Python, CustomTkinter"
              github="https://github.com/ckstrang/Pathfinding-Visualizer"
            />
            <ProjectCard
              title="Computerized Four"
              description="A computerized version of the board game Four by Stephen Tavener. Designed for children, the GUI is easy to understand and use, with color-blind friendly visuals"
              year="2024"
              classification="Group Coursework"
              techStack="Java, Java Swing"
              demo="https://drive.google.com/file/d/1seN4JPVF_FZXRXiCS9AP-glWSY-Ex313/view"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold border-b-2 border-b-indigo-500 pb-2 mb-6 text-center">
            About Me
          </h2>

          <p className="mb-4">
            Hi, I'm Colby, a fourth-year Computer Science student at Memorial
            University of Newfoundland, currently seeking a January 2026 work
            term opportunity. My academic and personal projects have fueled a
            strong interest in software development, particularly in building
            user-friendly applications.
          </p>

          <p className="mb-4">
            I grew up in a small fishing town in Newfoundland, and after high
            school I moved away to pursue my passion for technology and computer
            science. I have learned a lot in these past few years, and continue
            to learn and improve every day.
          </p>

          <p className="mb-4">
            In my free time, I enjoy working on personal programming projects.
            I'm always eager to learn new tools and sharpen my skills. Outside
            of coding, I like to spend time with friends, whether that's
            catching a movie, shopping, or playing video games together. As a
            hobby, I dabble in CGI (like animated movies or VFX shots) using
            Blender and Unreal Engine 5.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl border-b-2 font-semibold border-b-indigo-500 pb-2 mb-6 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-5 gap-4">
            <SkillCard
              skill="Python"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python icon"
            />
            <SkillCard
              skill="Java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java icon"
            />
            <SkillCard
              skill="C++"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              alt="C++ icon"
            />
            <SkillCard
              skill="JavaScript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript icon"
            />
            <SkillCard
              skill="React"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React icon"
            />
            <SkillCard
              skill="Supabase"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
              alt="Supabase icon"
            />
            <SkillCard
              skill="GitHub"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub icon"
            />
            <SkillCard
              skill="JetBrains"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg"
              alt="JetBrains icon"
            />
            <SkillCard
              skill="Unreal Engine 5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
              alt="Unreal Engine icon"
            />
            <SkillCard
              skill="Blender"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
              alt="Blender icon"
            />
            <SkillCard
              skill="Windows"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
              alt="Windows icon"
            />
            <SkillCard
              skill="Linux"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              alt="Linux icon"
            />
            <SkillCard
              skill="Tailwind CSS"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
