import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
// import './Team.css';

const Team = () => {
  return (
    <section className="bg-white text-gray-800 py-16 md:py-10 lg:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          Meet Our Core Team
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 1.2 }}
        >
          Our team brings together experienced Management Consultants, Startup Leaders, Top-ranking Chartered Accountants (CAs), Legal experts, Marketing strategists, and Certified Project Managers—united by a shared commitment to delivering impactful consulting solutions. With diverse expertise across industries and functions, we aim to create exceptional client experiences and drive meaningful business outcomes.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="our-team rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="picture h-64 w-full overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Team Member 1"
              />
            </div>
            <div className="team-content bg-light-gray p-6">
              <h3 className="name text-xl font-bold text-yellow-500">K Goutham</h3>
              <h4 className="title text-gray-600 mt-2">IIT Madras, Consultant</h4>
              <div className="social mt-4">
                <a 
                  href="https://www.linkedin.com/in/goutham-kumaresan-8aa594b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="inline-block p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
<motion.div
            className="our-team rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="picture h-64 w-full overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Team Member 1"
              />
            </div>
            <div className="team-content bg-light-gray p-6">
              <h3 className="name text-xl font-bold text-yellow-500">K Goutham</h3>
              <h4 className="title text-gray-600 mt-2">IIT Madras, Consultant</h4>
              <div className="social mt-4">
                <a 
                  href="https://www.linkedin.com/in/goutham-kumaresan-8aa594b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="inline-block p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          {/* Team Member 4 */}
          <motion.div
            className="our-team rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="picture h-64 w-full overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Team Member 4"
              />
            </div>
            <div className="team-content bg-light-gray p-6">
              <h3 className="name text-xl font-bold text-yellow-500">K Goutham</h3>
              <h4 className="title text-gray-600 mt-2">IIT Madras, Consultant</h4>
              <div className="social mt-4">
                <a 
                  href="#"
                  className="inline-block p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
<motion.div
            className="our-team rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="picture h-64 w-full overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Team Member 1"
              />
            </div>
            <div className="team-content bg-light-gray p-6">
              <h3 className="name text-xl font-bold text-yellow-500">K Goutham</h3>
              <h4 className="title text-gray-600 mt-2">IIT Madras, Consultant</h4>
              <div className="social mt-4">
                <a 
                  href="https://www.linkedin.com/in/goutham-kumaresan-8aa594b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="inline-block p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;