import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';
import messageboard from '../assets/messageboard.png';
import mernAuthS from '../assets/mernAuthS.png';
import studentteacherportalimg from '../assets/student-teacher-portal.png';


const portfolioData = {
  projects: [
    
    {
      id: 1,
      title: 'Student&Teachet portal',
      description: 'This MERN stack portal features Teacher Login for adding students and creating dynamic exams. Students log in to a Personal Dashboard, take any pending quizzes, and receive Instant Results with their score percentage.',
      screenshotUrl: studentteacherportalimg,
      liveUrl: 'https://mern-student-teacher-app-1.onrender.com',
      technologies: ['Node.js','React', 'Tailwind CSS', 'JWT', 'MongoDB', 'Express']
    },{
      id: 2,
      title: 'MERN-Email-authetication',
      description: 'A full-stack email authentication application, login,signUp,Verify using email  authentication using OTP. The backend is powered by Node.js and Express, with a MongoDB database.',
      screenshotUrl: mernAuthS,
      liveUrl: 'https://mern-auth-two-murex.vercel.app/',
      technologies: ['nodemailer','React', 'Brevo', 'JWT', 'MongoDB', 'Express']
    },{
      id: 3,
      title: 'Message Board--MERN',
      description: 'I created a message board any one with the link can post the meaasge. it stores the messages in mongoDb',
      screenshotUrl: messageboard,
      liveUrl: 'https://mern-message-board.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'MongoDb', 'Git']
    },
   
  ],
  skills: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/sagar00praveen', icon: githubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sagar-praveen', icon: linkedinIcon },
    { name: 'Instagram', url: 'https://instagram.com/___sagar_sagar__', icon: instagramIcon },
  ],
};


export default portfolioData;
