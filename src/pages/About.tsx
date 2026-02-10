import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'UI/UX Design', level: '90%' },
    { name: 'Mobile App Development', level: '85%' },
    { name: 'React Native', level: '80%' },
    { name: 'Figma', level: '95%' },
    { name: 'JavaScript/TypeScript', level: '85%' },
    { name: 'React', level: '90%' },
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
            <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a passionate UI/UX designer and mobile app developer with a keen eye for creating
                  beautiful and functional digital experiences. With expertise in both design and
                  development, I bridge the gap between aesthetics and functionality.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  My approach combines user-centered design principles with modern development
                  practices to create seamless and engaging applications.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: skill.level }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-blue-600 h-2.5 rounded-full"
                        />
                      </div>
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

export default About; 