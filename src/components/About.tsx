import React from 'react';

export const About: React.FC = () => {
  return (
    <section>
      <div id="about" className="min-h-screen md:px-12 pt-16 px-6 dark:text-white bg-white dark:bg-gray-900">
        <header>
          <h1 className="text-3xl font-extrabold">About Me</h1>
        </header>
        <main>
          <p className="mt-3">
            My name is Manikumar Alle, and I'm a full-stack developer. I have a strong passion for coding and building high-quality web applications. I am constantly seeking opportunities to grow professionally and contribute my skills to good projects and organizations.
          </p>
        </main>

        <section className="md:mt-8 mt-5">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          
          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Fullstack Developer Intern</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Quantum IT Innovation</span>
              <span>Remote</span>
              <span>June 2025 - present</span>
            </div>
          </div>

          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Fullstack Developer Intern</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Solar Secure Solutions</span>
              <span>Remote</span>
              <span>July 2024 - Sept 2024</span>
            </div>
          </div>

          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Fullstack Developer Intern</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Exposys Data Labs</span>
              <span>Remote</span>
              <span>May 2024 - Jun 2024</span>
            </div>
          </div>

          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Web Developer Intern</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>The Sparks Foundation</span>
              <span>Remote</span>
              <span>Sep 2023 - Oct 2023</span>
            </div>
          </div>
        </section>

        <section className="md:mt-8 mt-5">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="md:w-1/3 border-b pt-3 md:pb-5 pb-3">
            <div className='flex justify-between'>
              <h3 className="md:text-lg font-medium">Bachelor of Electronics Engineering</h3>
              <span className="text-xs bg-green-300 md:px-6 md:w-auto w-1/4 md:h-auto h-6 font-bold rounded-md text-green-700 text-center md:pt-1.5 pt-1">Full Time</span>
            </div>
            <div className="md:text-sm text-xs flex md:flex-row justify-between flex-col mt-2 md:gap-4 gap-1 ">
              <span>Gurukul Kangri University, Haridwar</span>
              <span>Dec 2021 - Jun 2025</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
