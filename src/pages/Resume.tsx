import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const experiences = [
    {
      title: 'Senior UI/UX Designer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: [
        'Led the design of multiple mobile applications',
        'Collaborated with development teams to implement designs',
        'Conducted user research and usability testing'
      ]
    },
    {
      title: 'Mobile App Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: [
        'Developed cross-platform mobile applications using React Native',
        'Implemented UI/UX designs and animations',
        'Worked with REST APIs and state management'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2014 - 2018'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-bold">Resume</h1>
              <a
                href="/Resume Analyst.pdf"
                download
                className="btn-primary flex items-center"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">
                        {exp.company} • {exp.period}
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">
                        {edu.school} • {edu.period}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'UI/UX Design',
                    'React Native',
                    'JavaScript',
                    'TypeScript',
                    'Figma',
                    'React',
                    'HTML/CSS',
                    'Git'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume; 