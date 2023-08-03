import { Experience, Skills } from '..';

export const ResumeSection = () => {
  return (
    <section id='resumesection' className='resume'>
      <div className='container h-100vh'>
        <h2 className='title'>Resume</h2>
        <div className='wrapper'>
          <Skills />
          <Experience />
        </div>
      </div>
    </section>
  );
};
