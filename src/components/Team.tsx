import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  // You can add more team members here
  {
    name: "K Goutham",
    title: "IIT Madras, Consultant",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedinUrl: "https://www.linkedin.com/in/goutham-kumaresan-8aa594b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Jane Doe",
    title: "Marketing Strategist",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedinUrl: "#"
  },
  {
    name: "John Smith",
    title: "Legal Expert",
    imageUrl: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedinUrl: "#"
  },
  {
    name: "Emily White",
    title: "Chartered Accountant",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkedinUrl: "#"
  }
];

const Team = () => {
  return (
    <section className="py-16 md:py-0 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Core Team<span className="text-brand-yellow">.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Our team brings together experienced Management Consultants, Startup Leaders, Top-ranking Chartered Accountants (CAs), Legal experts, and Marketing strategists—united by a shared commitment to delivering impactful consulting solutions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-2xl bg-brand-green/5 backdrop-blur-lg border border-white/20 group text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"}}
            >
              <div className="h-80 w-full overflow-hidden">
                <img 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-400" 
                  src={member.imageUrl}
                  alt={member.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
                <h4 className="text-brand-green font-semibold mt-1">{member.title}</h4>
                <div className="mt-4">
                  <a 
                    href={member.linkedinUrl}
                    className="inline-block p-2.5 bg-brand-yellow text-brand-dark rounded-full hover:bg-opacity-80 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;